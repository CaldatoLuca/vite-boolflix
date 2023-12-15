import { reactive } from "vue";

export const store = reactive({
  //array di films
  films: [],
  filmTotalResults: 0.5,
  //array di serie tv
  tvs: [],
  tvTotalResults: 0.5,

  //ricerca dell' utente
  searched: "",
  //lingue visualizzazione api
  language: "en-US",

  //gestione api
  apiConfig: {
    apiFilmUrl: "https://api.themoviedb.org/3/search/movie",
    apiTvUrl: "https://api.themoviedb.org/3/search/tv",
    apiKey: "21158f75b2a3edbfcfc831b6fd1520bf",
  },
});
