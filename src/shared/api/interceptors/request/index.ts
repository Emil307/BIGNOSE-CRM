import { TAxiosRequestInterceptorSuccess } from "shared";

export const tokenInterceptor: TAxiosRequestInterceptorSuccess = (config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
};
