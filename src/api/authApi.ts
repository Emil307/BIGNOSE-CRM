import { $api } from "@/shared";

export const login = async (email: string, password: string) => {
  const response = await $api.post(`/api/employees/login/`, {
    email: email,
    password: password,
  });

  return response;
};
