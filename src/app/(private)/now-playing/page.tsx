import { GetNowPlayingMovies } from "@/requests/movies.request";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function NowPlaying() {
  const response = await GetNowPlayingMovies(1);
  let moviesList = response?.results;
  moviesList = moviesList.sort((a, b) => {
    const dateA = new Date(a.release_date).getTime();
    const dateB = new Date(b.release_date).getTime();
    return dateB - dateA;
  });
  return (
    <div className="w-full custom-scrollbar max-w-[100vw] px-4 sm:px-6 md:px-10 py-8 space-y-12 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      <section className="flex flex-wrap items-center justify-center gap-10">
        {/* Destaque maior para o primeiro da lista dos populares. */}
        <Link
          href={`/movie/${moviesList[0]?.id}`}
          className="flex flex-col justify-center sm:flex-row sm:justify-start w-10/12 bg-gray-800 rounded-2xl p-3 shadow-md hover:scale-105 hover:bg-gray-700 transition-transform"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${moviesList[0]?.poster_path}`}
            alt={`Poster do filme ${moviesList[0]?.title}`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full sm:w-1/3 bg-gray-700 rounded-lg mb-2"
          />
          <div className="flex flex-col justify-start space-y-4 w-full sm:ml-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {moviesList[0].title}
            </h1>

            <p className="text-gray-300 hidden sm:flex sm:text-xs md:text-sm lg:text-base">
              {moviesList[0].overview
                ? moviesList[0].overview
                : "Overview indisponível."}
            </p>

            <div className="flex items-center gap-x-2 text-xs justify-between sm:justify-start sm:text-base sm:flex-col sm:items-start md:flex-row md:items-center lg:text-xl lg:gap-x-5 text-gray-300">
              <div className="flex flex-row gap-x-2">
                <span className="font-semibold text-white">Lançamento:</span>
                <p>{moviesList[0].release_date}</p>
              </div>
              <div className="flex flex-row gap-x-2 ">
                <span className="font-semibold text-white">Nota:</span>
                <p className="text-yellow-500">
                  {moviesList[0].vote_average?.toFixed(1)} ⭐
                </p>
              </div>
            </div>
          </div>
        </Link>
        {moviesList
          ? moviesList?.map((movie, index) => {
              if (index == 0) return null; //   Ignora o primeiro da lista, que recebe destaque logo acima.
              return (
                <Link
                  href={`/movie/${movie?.id}`}
                  key={index}
                  className="flex flex-col justify-center w-2/5 sm:w-[180px] bg-gray-800 rounded-2xl p-3 shadow-md hover:scale-105 hover:bg-gray-700 transition-transform"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={`Poster do filme ${movie?.title}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-full w-full bg-gray-700 rounded-lg mb-2"
                  />
                  <div className="flex justify-between items-center">
                    <h1 className="text-white  truncate">{movie?.title}</h1>
                    <p className="text-sm text-yellow-500">
                      {movie?.vote_average.toFixed(1)}⭐
                    </p>
                  </div>
                </Link>
              );
            })
          : null}
      </section>
    </div>
  );
}
