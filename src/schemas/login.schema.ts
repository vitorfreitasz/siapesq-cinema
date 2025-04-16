import * as Yup from "yup";
export const LoginSchema = Yup.object({
  nome: Yup.string().min(2, "Usuário inválido.").required("Obrigatório."),
  senha: Yup.string()
    .min(6, "Necessário pelo menos 6 digitos.")
    .required("Obrigatório."),
});
