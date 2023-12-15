<script>
import AppSearch from "./components/AppSearch.vue";
import AppResoult from "./components/AppResoult.vue";
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppSearch,
    AppResoult,
  },
  methods: {
    searchFilm() {
      this.store.apiUrl =
        "https://api.themoviedb.org/3/search/movie?api_key=21158f75b2a3edbfcfc831b6fd1520bf&query=";
      this.store.apiUrl += this.store.filmSearched;
      axios.get(this.store.apiUrl).then((apiData) => {
        this.store.films = apiData.data.results;
      });
      this.store.filmSearched = "";
    },
  },
};
</script>

<template>
  <h1>Boolflix</h1>
  <AppSearch @buttonSearch="searchFilm" />
  <AppResoult v-if="store.films.length !== 0" />
  <div v-else>Nessun elemnto trovato</div>
</template>
