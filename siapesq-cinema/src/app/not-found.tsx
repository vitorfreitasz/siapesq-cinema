import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-y-auto">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-7xl font-extrabold tracking-tight">404</h1>
        <p className="text-2xl text-red-400">Página não encontrada</p>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          Opa! Parece que você tentou acessar uma página que não existe no
          SIAPESQ CINEMA.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-medium"
        >
          Voltar à Página Inicial
        </Link>
      </div>
    </main>
  );
}
