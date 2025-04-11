import FormLogin from "@/components/form-login";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 ">
      <div className="flex flex-col items-center justify-center bg-gray-950 w-full max-w-sm min-h-max p-6 rounded-3xl">
        <Image
          src="/banner-sc.png"
          alt="Logo da empresa."
          width={0}
          height={0}
          sizes="100vw"
          className="w-2/3 rounded-lg mb-20 mt-5"
        />
        <FormLogin />
        <p className="text-white text-sm mt-4">
          Não tem conta? <Link href={"/register"} className="underline">Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}
