import * as Yup from "yup";
export const RegisterSchema = Yup.object({
  nome: Yup.string().min(2, "Usuário inválido.").required("Obrigatório."),
  email: Yup.string().email("Email inválido.").required("Obrigatório."),
  senha: Yup.string()
    .min(6, "Necessário pelo menos 6 digitos.")
    .required("Obrigatório."),
  confirma_senha: Yup.string()
    .min(6, "Necessário pelo menos 6 digitos.")
    .oneOf([Yup.ref("senha")], "As senhas devem ser iguais")
    .required("Obrigatório."),
});
