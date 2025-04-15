import axios from "axios";

const ApiUsers = axios.create({
  baseURL: "http://localhost:3000",
});

export default ApiUsers;
