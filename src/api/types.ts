export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  status: number;
  access_token: string;
  refresh_string: string;
  employee: any;
}
