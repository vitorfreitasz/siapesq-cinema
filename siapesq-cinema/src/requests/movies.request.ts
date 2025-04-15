import ApiMovies from "@/service/api-movies";

export const GetPopularMovies = async (page: number) => {
  const res = await ApiMovies.get("/movie/popular", { params: { page } });
  return res.data;
};

export const GetNowPlayingMovies = async (page: number) => {
  const res = await ApiMovies.get("/movie/now_playing", { params: { page } });
  return res.data;
};

export const GetTopRatedMovies = async (page: number) => {
  const res = await ApiMovies.get("/movie/top_rated", { params: { page } });
  return res.data;
};

export const GearchMoviesByName = async (query: string, page: number) => {
  const res = await ApiMovies.get("/search/movie", {
    params: { query, page },
  });
  return res.data;
};

export const GetGenres = async () => {
  const res = await ApiMovies.get("/genre/movie/list");
  return res.data.genres;
};

export const GetMoviesByGenre = async (genreId: number, page: number) => {
  const res = await ApiMovies.get("/discover/movie", {
    params: { with_genres: genreId, page },
  });
  return res.data;
};

export const GetMovieDetails = async (movieId: number) => {
  const res = await ApiMovies.get(`/movie/${movieId}`);
  return res.data;
};

export const GetMovieVideos = async (movieId: number) => {
  const res = await ApiMovies.get(`/movie/${movieId}/videos`);
  return res.data.results;
};
