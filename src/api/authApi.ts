import { $api } from "@/shared";
import { LoginRequestDTO } from "./types";

export const login = async (data: LoginRequestDTO) => {
  const response = await $api.post(`/api/employees/login/`, data);

  return response;
};

export const logout = async () => {
  const response = await $api.get(`/api/employees/logout/`);

  return response;
};
