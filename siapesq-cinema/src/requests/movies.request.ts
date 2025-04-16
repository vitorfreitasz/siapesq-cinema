import {
  GenreResponse,
  MovieListResponse,
} from "@/interfaces/movies.interface";
import ApiMovies from "@/service/api-movies";

//  Filmes populares
export const GetPopularMovies = async (page: number) => {
  const res = await ApiMovies.get("/movie/popular", { params: { page } });
  return res.data;
};

//  Filmes em cartaz
export const GetNowPlayingMovies = async (page: number) => {
  const res = await ApiMovies.get("/movie/now_playing", { params: { page } });
  return res.data;
};

//  Filmes mais bem avaliados
export const GetTopRatedMovies = async (page: number) => {
  const res = await ApiMovies.get<MovieListResponse>("/movie/top_rated", {
    params: { page },
  });
  return res.data;
};

//  Buscar filmes pelo nome
export const GearchMoviesByName = async (query: string, page: number) => {
  const res = await ApiMovies.get("/search/movie", {
    params: { query, page },
  });
  return res.data;
};

//  Buscar gêneros
export const GetGenres = async () => {
  const res = await ApiMovies.get<GenreResponse>("/genre/movie/list");
  return res.data.genres;
};

// Buscar filmes por gênero
export const GetMoviesByGenre = async (genreId: number, page: number) => {
  const res = await ApiMovies.get<MovieListResponse>("/discover/movie", {
    params: { with_genres: genreId, page },
  });
  return res.data;
};

//  Buscar detalhes de um filme específico
export const GetMovieDetails = async (movieId: number) => {
  const res = await ApiMovies.get(`/movie/${movieId}`);
  return res.data;
};

//  Buscar trailers.
export const GetMovieVideos = async (movieId: number) => {
  const res = await ApiMovies.get(`/movie/${movieId}/videos`);
  return res.data.results;
};
