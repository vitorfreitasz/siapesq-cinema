"use client";
import CircularProgress from "@/components/circular-progress";
import ShowMessage from "@/components/show-message";
import { IPropsMessage } from "@/interfaces/show-message.interface";
import { IHandleRegister } from "@/interfaces/user.interface";
import { RegisterSchema } from "@/schemas/register.schema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function FormRegister({
  handleRegister,
  handleRedirect,
}: IHandleRegister) {
  const [showPassword, setShowPassword] = useState(false);
  const [messageData, setMessageData] = useState<IPropsMessage>({
    message: "",
    time: 0,
    type: "danger",
  });
  return (
    <Formik
      initialValues={{ nome: "", email: "", senha: "", confirma_senha: "" }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await handleRegister(values);
          if (response) {
            if (response?.isError) {
              setMessageData({
                message: response?.message || "Erro!",
                time: 3,
                type: "danger",
              });
            } else {
              setMessageData({
                message: response?.message || "Sucesso!",
                time: 3,
                type: "success",
              });
              setTimeout(
                () => handleRedirect(String(response?.data?.token)),
                3000
              );
            }
          } else {
            throw new Error("Algo deu errado!");
          }
        } catch (error) {
          setMessageData({
            message: String(
              error ? error : "Erro inesperado, tente novamente!"
            ),
            time: 3,
            type: "danger",
          });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col w-full sm:w-11/12 md:w-4/5 gap-4">
          <ShowMessage
            time={messageData.time}
            message={messageData.message}
            type={messageData.type}
            onEndMessage={(resetData) => {
              console.log(resetData);
              setMessageData((prev) =>
                prev.message !== resetData.message ? resetData : prev
              );
            }}
          />
          <div className="mb-4">
            <label className="block text-sm text-white">Nome</label>
            <Field
              name="nome"
              className="w-full p-2 text-white bg-gray-900 rounded-md mt-1"
            />
            <ErrorMessage
              name="nome"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-white">Email</label>
            <Field
              name="email"
              className="w-full p-2 text-white bg-gray-900 rounded-md mt-1"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4 w-full">
            <div className="flex flex-row justify-between">
              <label className="block text-sm text-white">Senha</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center text-white mr-2"
              >
                {showPassword ? <Eye size={15} /> : <EyeOff size={15} />}
              </button>
            </div>
            <Field
              type={showPassword ? "text" : "password"}
              name="senha"
              className="w-full p-2 text-white bg-gray-900 rounded-md mt-1"
            />
            <ErrorMessage
              name="senha"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4 w-full">
            <div className="flex flex-row justify-between">
              <label className="block text-sm text-white">
                Confirme sua senha
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center text-white mr-2"
              >
                {showPassword ? <Eye size={15} /> : <EyeOff size={15} />}
              </button>
            </div>
            <Field
              type={showPassword ? "text" : "password"}
              name="confirma_senha"
              className="w-full p-2 text-white bg-gray-900 rounded-md mt-1"
            />
            <ErrorMessage
              name="confirma_senha"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-950 text-white text-lg p-2 rounded-md hover:bg-green-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress small={true} /> : "Cadastrar-se"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
