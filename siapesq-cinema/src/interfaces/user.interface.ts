export interface IUsersResponse {
  message: string;
  token: string;
}

export interface IUsers {
  nome: string;
  senha: string;
  email?: string;
}

export interface IHandleLogin {
  handleLogin: (data: IUsers) => Promise<
    | {
        data: IUsersResponse;
        isError: boolean;
        message?: undefined;
      }
    | {
        message: string;
        isError: boolean;
        data?: undefined;
      }
  >;
  handleRedirect: (token: string) => Promise<never>;
}

export interface IHandleRegister {
  handleRegister: (data: IUsers) => Promise<
    | {
        data: IUsersResponse;
        isError: boolean;
        message?: undefined;
      }
    | {
        message: string;
        isError: boolean;
        data?: undefined;
      }
  >;
  handleRedirect: (token: string) => Promise<never>;
}
