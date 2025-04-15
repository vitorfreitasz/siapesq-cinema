import { IUsersResponse } from "@/interfaces/user.interface";
import ApiUsers from "@/service/api-users";
import { AxiosError } from "axios";

export default async function RegisterRequest(nome: string, senha: string) {
  try {
    const res = await ApiUsers.post<IUsersResponse>("/api/register", {
      username: nome,
      password: senha,
    });
    if (res && res.data && res.data.token) {
      return {
        data: res?.data,
        isError: false,
      };
    }
    return {
      message: String(
        res?.data?.message
          ? res?.data?.message
          : "Erro na requisição de registro."
      ),
      isError: true,
    };
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return {
        message: String(
          err?.response?.data?.message
            ? err?.response?.data?.message
            : err?.message
            ? err?.message
            : "Erro na requisição de registro."
        ),
        isError: true,
      };
    }
    return {
      message: "Erro na requisição de registro.",
      isError: true,
    };
  }
}
