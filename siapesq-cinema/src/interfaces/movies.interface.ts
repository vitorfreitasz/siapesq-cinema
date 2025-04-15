export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface Genre {
  id: number;
  name: string;
}

export interface GenreResponse {
  genres: Genre[];
}
export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  genres: Genre[];
  release_date: string;
  runtime: number;
  tagline: string;
  status: string;
}
export interface Video {
  id: string;
  key: string;
  name: string;
  site: "YouTube" | string;
  type: "Trailer" | "Teaser" | string;
}

export interface VideoResponse {
  id: number;
  results: Video[];
}
