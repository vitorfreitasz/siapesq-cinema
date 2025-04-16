"use client";
import { Movie } from "@/interfaces/movies.interface";
import React, { useState } from "react";
import Carousel from "../carousel";

export default function Search({
  handleSearch,
}: {
  handleSearch: (query: string) => Promise<Movie[]>;
}) {
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const handleSearchMovie = async (query: string) => {
    const res = await handleSearch(query);
    setSearchedMovies(res);
  };
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
        Pesquisar filmes
      </h2>
      <form
        action={(formData: FormData) => {
          const query = formData?.get("query");
          handleSearchMovie(String(query));
        }}
      >
        <input
          type="text"
          name="query"
          placeholder="Digite o nome do filme..."
          className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </form>
      {searchedMovies[0] ? (
        <>
          <h2 className="text-md sm:text-lg font-semibold text-white mb-4 mt-10">
            Resultado
          </h2>
          <Carousel moviesList={searchedMovies} />
        </>
      ) : null}
    </section>
  );
}
