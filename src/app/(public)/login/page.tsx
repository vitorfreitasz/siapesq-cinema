import FormLogin from "@/components/form-login";
import { IUsers } from "@/interfaces/user.interface";
import LoginRequest from "@/requests/login.request";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
  const handleLogin = async (data: IUsers) => {
    "use server";
    const response = await LoginRequest(data?.nome, data?.senha);
    return response;
  };
  const handleRedirect = async (token: string) => {
    "use server";
    const cookieStorage = await cookies();
    cookieStorage?.set("token", token);
    redirect("/home");
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-y-auto">
      <div className="flex flex-col items-center justify-center bg-gray-950 w-full sm:max-w-md md:max-w-sm p-6 sm:p-8 rounded-3xl shadow-lg">
        <Image
          src="/banner-sc-bgnull.png"
          alt="Banner SIAPESQ Cinema."
          width={0}
          height={0}
          sizes="100vw"
          className="w-3/4 sm:w-3/4 md:w-2/3 mb-10 mt-5"
        />
        <FormLogin handleRedirect={handleRedirect} handleLogin={handleLogin} />
        <p className="text-white text-sm mt-4">
          Não tem conta?{" "}
          <Link href={"/register"} className="underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  );
}
