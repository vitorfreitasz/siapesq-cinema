import Link from "next/link";
import React from "react";

export default async function Root() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-y-auto">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl font-extrabold tracking-tight">
          🎬 SIAPESQ CINEMA
        </h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          Bem-vindo à vitrine de filmes da SIAPESQ. Descubra, explore e
          apaixone-se por grandes histórias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/login"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-medium"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-200 transition rounded-lg text-lg font-medium"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </main>
  );
}
