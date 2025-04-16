import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function NavBar() {
  const handleLogout = async () => {
    "use server";
    const cookieStorage = await cookies();
    cookieStorage.delete("token");
    redirect("/login");
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 flex items-center justify-evenly bg-gray-800 shadow-xl">
      <Image
        src="/banner-sc-bgnull.png"
        alt="Logo da empresa."
        width={0}
        height={0}
        sizes="100vw"
        className="w-32"
      />
      <Link
        href="/home"
        className="text-white hover:text-blue-600 transition-colors duration-200"
      >
        Início
      </Link>
      <Link
        href="/top-hated"
        className="text-white hover:text-blue-600 transition-colors duration-200"
      >
        Mais amados
      </Link>
      <Link
        href="/now-playing"
        className="text-white hover:text-blue-600 transition-colors duration-200"
      >
        Lançamentos
      </Link>
      <form action={handleLogout}>
        <button
          type="submit"
          className="text-white hover:text-blue-600 cursor-pointer transition-colors duration-200"
        >
          Sair
        </button>
      </form>
    </nav>
  );
}
