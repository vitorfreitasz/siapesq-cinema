"use client";
import CircularProgress from "@/components/circular-progress";
import ShowMessage from "@/components/show-message";
import { IPropsMessage } from "@/interfaces/show-message.interface";
import { LoginSchema } from "@/schemas/login.schema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [messageData, setMessageData] = useState<IPropsMessage>({
    message: "",
    time: 0,
    type: "danger",
  });
  return (
    <Formik
      initialValues={{ nome: "", senha: "" }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = { message: "Message", error: "Error" };
          if (response) {
            if (response?.error) {
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
              setTimeout(() => console.log("oi"), 3000);
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
        <Form className="flex flex-col w-11/12 gap-4">
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
            <label className="block text-sm text-white">Usuário</label>
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

          <button
            type="submit"
            className="w-full bg-green-950 text-white text-lg p-2 rounded-md hover:bg-green-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress small={true} /> : "Entrar"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
