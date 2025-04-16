import FormRegister from "@/components/form-register";
import { IUsers } from "@/interfaces/user.interface";
import RegisterRequest from "@/requests/register.request";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Register() {
  const handleRegister = async (data: IUsers) => {
    "use server";
    const response = await RegisterRequest(
      data?.nome,
      data?.senha,
      data?.email ? data?.email : ""
    );
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
          alt="Logo da empresa."
          width={0}
          height={0}
          sizes="100vw"
          className="w-3/4 sm:w-3/4 md:w-2/3 mb-10 mt-5"
        />
        <FormRegister
          handleRedirect={handleRedirect}
          handleRegister={handleRegister}
        />
        <p className="text-white text-sm mt-4">
          Já tem conta?{" "}
          <Link href={"/login"} className="underline">
            Entrar!
          </Link>
        </p>
      </div>
    </main>
  );
}
