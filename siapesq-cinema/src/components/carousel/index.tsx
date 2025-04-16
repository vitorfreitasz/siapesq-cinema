import { Movie } from "@/interfaces/movies.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Carousel({ moviesList }: { moviesList: Movie[] }) {
  return (
    <div className="flex space-x-4 overflow-x-auto custom-scrollbar pb-2">
      {moviesList?.map((movie, index) => (
        <Link
          href={`/movie/${movie?.id}`}
          key={index}
          className="flex flex-col min-w-[140px] sm:min-w-[160px] md:min-w-[180px] bg-gray-800 rounded-2xl p-3 shadow-md hover:scale-105 transition-transform"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={`Poster do filme ${movie?.title}`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-40 sm:h-48 md:h-56 w-full bg-gray-700 rounded-lg mb-2"
          />
          <div className="flex justify-between items-center">
            <h1 className="text-white  truncate">{movie?.title}</h1>
            <p className="text-sm text-yellow-500">
              {movie?.vote_average.toFixed(1)}⭐
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
