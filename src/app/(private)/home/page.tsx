import Carousel from "@/components/carousel";
import Search from "@/components/search";
import { MovieListResponse, Movie } from "@/interfaces/movies.interface";
import {
  GearchMoviesByName,
  GetGenres,
  GetMoviesByGenre,
  GetPopularMovies,
} from "@/requests/movies.request";
import React from "react";

export default async function Home() {
  //  Get dos filmes em alta
  const responsePopularMovies = await GetPopularMovies(1);
  const popularMovies = responsePopularMovies?.results;

  const handleSearchMovie = async (query: string) => {
    "use server";
    const res = await GearchMoviesByName(query, 1);
    if (res && res?.results) {
      return res?.results;
    }
    return [];
  };
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
    <div className="w-full custom-scrollbar max-w-[100vw] px-4 sm:px-6 md:px-10 py-8 space-y-12 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      {/* Pesquisa por nome (Não implementado ainda) */}
      <Search handleSearch={handleSearchMovie} />

      {/* Carrossel de filmes mais bem avaliados */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Filmes em alta
        </h2>
        <Carousel moviesList={popularMovies} />
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
