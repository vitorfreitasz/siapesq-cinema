"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar({
  handleLogout,
  handleRedirect,
}: {
  handleLogout: () => Promise<never>;
  handleRedirect: (pathname: string) => Promise<never>;
}) {
  const pathname = usePathname();
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
      <button
        onClick={() => handleRedirect("/home")}
        className={`transition-colors cursor-pointer duration-200 ${
          pathname === "/home"
            ? "text-white font-bold underline decoration-blue-500 underline-offset-4"
            : "text-white hover:text-blue-600"
        }`}
      >
        Início
      </button>
      <button
        onClick={() => handleRedirect("/top-hated")}
        className={`transition-colors cursor-pointer duration-200 ${
          pathname === "/top-hated"
            ? "text-white font-bold underline decoration-blue-500 underline-offset-4"
            : "text-white hover:text-blue-600"
        }`}
      >
        Mais amados
      </button>
      <button
        onClick={() => handleRedirect("/now-playing")}
        className={`transition-colors cursor-pointer duration-200 ${
          pathname === "/now-playing"
            ? "text-white font-bold underline decoration-blue-500 underline-offset-4"
            : "text-white hover:text-blue-600"
        }`}
      >
        Lançamentos
      </button>
      <button
        onClick={() => handleLogout()}
        className="text-white hover:text-red-800 transition-colors cursor-pointer duration-200"
      >
        Sair
      </button>
    </nav>
  );
}
