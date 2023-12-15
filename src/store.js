import { reactive } from "vue";

export const store = reactive({
  //array di films con relativa api di ricerca e v-model
  films: [],
  totalResoults: 1,
  filmSearched: "",
  language: "en-US",
  apiConfig: {
    apiUrl: "https://api.themoviedb.org/3/search/movie",
    apiKey: "21158f75b2a3edbfcfc831b6fd1520bf",
  },
});
