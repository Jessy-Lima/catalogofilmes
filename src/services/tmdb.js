import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

console.log("API KEY carregada:", API_KEY ? "SIM" : "NÃO");

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "pt-BR"
  }
});

export default tmdb;