import { login, logout } from "@/api/authApi";
import { LoginRequestDTO } from "@/api/types";
import { deleteCookie, getCookie, setCookie } from "@/shared";
import axios from "axios";
import { makeAutoObservable } from "mobx";
import { NavigateFunction } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

class AuthState {
  isAuth: boolean = false;
  employee: any = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(data: LoginRequestDTO, navigate: NavigateFunction) {
    this.isLoading = true;

    login(data)
      .then((res) => {
        this.isAuth = true;
        this.employee = res.data.employee;
        localStorage.setItem("token", res.data.access_token);
        setCookie("refresh", res.data.refresh_token, 60);
        navigate("/profile");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  async logout(navigate: NavigateFunction) {
    this.isAuth = false;
    localStorage.setItem("token", "");
    deleteCookie("refresh");

    await logout();

    navigate("/");
  }

  async checkAuth(navigate: NavigateFunction) {
    try {
      const response = await axios.post(`${API}/api/employees/token/refresh/`, {
        refresh_token: getCookie("refresh"),
      });
      localStorage.setItem("token", response.data.access_token);
      this.isAuth = true;
      this.employee = response.data.employee;
    } catch (e: any) {
      console.log(e?.response?.data?.message || "Неизвестная ошибка");
      navigate("/");
    }
  }
}

export default new AuthState();
