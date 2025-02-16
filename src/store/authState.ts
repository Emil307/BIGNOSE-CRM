import { login } from "@/api/authApi";
import { LoginRequestDTO } from "@/api/types";
import { makeAutoObservable } from "mobx";
import { NavigateFunction } from "react-router-dom";

class AuthState {
  employee: any = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  login(data: LoginRequestDTO, navigate: NavigateFunction) {
    this.isLoading = true;

    login(data)
      .then((res) => {
        this.employee = res.data.employee;
        navigate("/profile");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}

export default new AuthState();
