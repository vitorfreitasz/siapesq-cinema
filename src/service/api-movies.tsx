import axios from "axios";

const ApiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "pt-BR",
  },
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
});

export default ApiMovies;
