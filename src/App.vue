<script>
import AppSearch from "./components/AppSearch.vue";
import AppResoult from "./components/AppResoult.vue";
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
      error: "",
    };
  },

  components: {
    AppSearch,
    AppResoult,
  },
  methods: {
    searchFilm() {
      axios
        .get(this.store.apiConfig.apiUrl, {
          params: {
            api_key: this.store.apiConfig.apiKey,
            query: this.store.filmSearched,
            language: this.store.language,
          },
        })
        .then((apiData) => {
          this.store.films = apiData.data.results;
          this.store.totalResoults = apiData.data.total_results;
        })
        .catch((error) => {
          this.error = error;
          this.store.films = [];
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
  <div v-else-if="this.store.totalResoults === 0">Nessun elemento trovato</div>
  <div v-if="this.error !== ''">{{ this.error }}</div>
</template>
