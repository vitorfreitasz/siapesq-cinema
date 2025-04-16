"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function NavBar({
  handleLogout,
  handleRedirect,
}: {
  handleLogout: () => Promise<never>;
  handleRedirect: (pathname: string) => Promise<never>;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = [
    {
      label: "Início",
      path: "/home",
      onClick: () => handleRedirect("/home"),
    },
    {
      label: "Mais amados",
      path: "/top-hated",
      onClick: () => handleRedirect("/top-hated"),
    },
    {
      label: "Lançamentos",
      path: "/now-playing",
      onClick: () => handleRedirect("/now-playing"),
    },
    {
      label: "Sair",
      path: "/logout", // só pra manter consistência, mesmo que não use
      onClick: () => handleLogout(),
    },
  ];

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
      {/* Menu Desktop */}
      <div className="hidden sm:flex w-2/3 justify-around gap-4 items-center">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className={`transition-color cursor-pointer duration-200 ${
              pathname === item.path
                ? "text-white font-bold underline decoration-blue-500 underline-offset-4"
                : item.label === "Sair"
                ? "text-white hover:text-red-800"
                : "text-white hover:text-blue-600"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Botão Mobile */}
      <div className="sm:hidden">
        <button
          onClick={handleToggleMenu}
          className="text-white text-2xl cursor-pointer focus:outline-none"
        >
          ☰
        </button>
      </div>
      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col gap-4 items-center py-4 sm:hidden z-40">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`transition-colors cursor-pointer duration-200 ${
                pathname === item.path
                  ? "text-white font-bold underline decoration-blue-500 underline-offset-4"
                  : item.label === "Sair"
                  ? "text-white hover:text-red-800"
                  : "text-white hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
