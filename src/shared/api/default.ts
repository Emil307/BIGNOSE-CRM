import axios from "axios";
import { tokenInterceptor } from "./interceptors/request";
import { getCookie } from "@/shared/lib";

const API = import.meta.env.VITE_API_URL;

export const $api = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const $apiFile = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

$api.interceptors.request.use(tokenInterceptor);
$apiFile.interceptors.request.use(tokenInterceptor);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(
          `${API}/api/employees/token/refresh/`,
          {
            refresh_token: getCookie("refresh"),
          }
        );
        localStorage.setItem("token", response.data.access_token);
        return $api.request(originalRequest);
      } catch (e: any) {
        console.log(e?.response?.data?.message || "Неизвестная ошибка");
      }
    }
    throw error;
  }
);

$apiFile.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(`${API}/api/users/token-refresh/`, {
          refresh_token: getCookie("refresh"),
        });
        localStorage.setItem("token", response.data.access_token);
        return $api.request(originalRequest);
      } catch (e: any) {
        console.log(e?.response?.data?.message || "Неизвестная ошибка");
      }
    }
    throw error;
  }
);
