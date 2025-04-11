import FormRegister from "@/components/form-register";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="flex flex-col items-center justify-center bg-gray-950 w-full max-w-sm min-h-max p-6 rounded-3xl">
        <Image
          src="/banner-sc.png"
          alt="Logo da empresa."
          width={0}
          height={0}
          sizes="100vw"
          className="w-2/3 rounded-lg mb-20 mt-5"
        />
        <FormRegister />
        <p className="text-white text-sm mt-4">
          Já tem conta?
          <Link href={"/login"} className="underline">
            Entrar!
          </Link>
        </p>
      </div>
    </main>
  );
}
