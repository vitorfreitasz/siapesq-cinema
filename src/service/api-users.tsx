import axios from "axios";

const ApiUsers = axios.create({
  baseURL: "siapesq-cinema.vercel.app",
});

export default ApiUsers;
