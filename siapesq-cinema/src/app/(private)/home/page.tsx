import Carousel from "@/components/carousel";
import {
  GetGenres,
  GetMoviesByGenre,
  GetTopRatedMovies,
} from "@/requests/movies.request";
import React from "react";

export default async function Home() {
  //  Get dos filmes mais bem avaliados
  const responseTopHated = await GetTopRatedMovies(1);
  const topHatedMovies = responseTopHated?.results;

  //  Get dos gêneros
  const responseGenre = await GetGenres();
  //  Get dos filmes por gênero
  const moviesByGenre = await Promise.all(
    responseGenre?.map(async (item) => {
      const res = await GetMoviesByGenre(item?.id, 1);
      const movies = res?.results;
      return { name: item?.name, movies };
    })
  );

  return (
    <div className="w-full custom-scrollbar max-w-[100vw] px-4 sm:px-6 md:px-10 py-8 space-y-12 md:max-w-7xl mx-auto">
      {/* Pesquisa por nome (Não implementado ainda) */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Pesquisar filmes
        </h2>
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </section>

      {/* Carrossel de filmes mais bem avaliados */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Mais bem avaliados
        </h2>
        <Carousel moviesList={topHatedMovies} />
      </section>

      {/* Carrossel de filmes por gênero */}
      {moviesByGenre
        ? moviesByGenre?.map((item, index) => (
            <section key={index}>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                {item.name}
              </h2>
              <Carousel moviesList={item?.movies} />
            </section>
          ))
        : null}
    </div>
  );
}
