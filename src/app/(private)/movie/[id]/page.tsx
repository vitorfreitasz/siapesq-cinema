import { GetMovieDetails, GetMovieVideos } from "@/requests/movies.request";
import Image from "next/image";
import React from "react";

export default async function Movie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = await GetMovieDetails(id ? id : "0");
  const movieVideos = await GetMovieVideos(id ? id : "0");

  return (
    <div className="w-full custom-scrollbar max-w-[100vw] px-4 sm:px-6 md:px-10 py-8 space-y-12 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto relative z-20">
      <div
        className="w-full h-full fixed inset-0 -z-10 brightness-[0.35] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
        {/* Poster */}
        <div className="w-10/12 sm:w-2/4 md:w-1/3 flex-shrink-0">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={`Poster do filme ${movie?.title}`}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* Detalhes do filme */}
        <div className="flex flex-col justify-start space-y-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {movie.title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-prose">
            {movie.overview ? movie.overview : "Overview indisponível."}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-300">
            <span className="font-semibold text-white">Lançamento:</span>{" "}
            <p>{movie.release_date}</p>
            <span className="font-semibold text-white ml-4">Nota:</span>{" "}
            <p className="text-yellow-500">
              {movie.vote_average?.toFixed(1)} ⭐
            </p>
          </div>

          {/* Gêneros */}
          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-700 text-white text-xs sm:text-sm px-3 py-1 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Trailer (só se tiver no youtube) */}
      {movieVideos && movieVideos[0] && movieVideos[0]?.site == "YouTube" ? (
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-xl text- font-semibold text-white mb-4">
            Trailer
          </h2>
          <div className="w-10/12 sm:w-2/3 aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${movieVideos[0]?.key}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
