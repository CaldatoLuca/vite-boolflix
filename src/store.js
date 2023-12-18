import { reactive } from "vue";

export const store = reactive({
  //array di films e total result
  films: [],
  filmTotalResults: 0.5,
  //array di serie tv e total result
  tvs: [],
  tvTotalResults: 0.5,

  //ricerca dell' utente
  searched: "",
  //lingue visualizzazione api
  language: "",
  //path img
  pathImg: "https://image.tmdb.org/t/p/w342",

  //voto massimo (5)
  maxVote: 5,

  //gestione api
  apiConfig: {
    apiFilmUrl: "https://api.themoviedb.org/3/search/movie",
    apiTvUrl: "https://api.themoviedb.org/3/search/tv",

    apiKey: "21158f75b2a3edbfcfc831b6fd1520bf",
    apiLanguage: "language=it-IT",
  },
});
