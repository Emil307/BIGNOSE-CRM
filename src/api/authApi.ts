import { $api } from "@/shared";
import { LoginRequestDTO } from "./types";

export const login = async (data: LoginRequestDTO) => {
  const response = await $api.post(`/api/employees/login/`, data);

  return response;
};
