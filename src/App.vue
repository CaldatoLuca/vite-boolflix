<script>
import AppHeader from "./components/AppHeader.vue";
import AppResoult from "./components/AppResoult.vue";
import AppWelcomePage from "./components/AppWelcomePage.vue";
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
      error: "",
      welcomeHome: false,
    };
  },

  components: {
    AppHeader,
    AppResoult,
    AppWelcomePage,
  },
  methods: {
    search(apiUrl1, apiUrl2) {
      const request1 = axios.get(apiUrl1, {
        params: {
          api_key: this.store.apiConfig.apiKey,
          query: this.store.searched,
          language: this.store.language,
        },
      });

      const request2 = axios.get(apiUrl2, {
        params: {
          api_key: this.store.apiConfig.apiKey,
          query: this.store.searched,
          language: this.store.language,
        },
      });

      Promise.all([request1, request2])
        .then(([apiData1, apiData2]) => {
          this.store.films = apiData1.data.results;
          this.store.filmTotalResults = apiData1.data.total_results;

          this.store.tvs = apiData2.data.results;
          this.store.tvTotalResults = apiData2.data.total_results;
        })
        .catch((errors) => {
          this.error = errors;
          this.store.films = [];
          this.store.tvs = [];
        })
        .finally(() => {
          this.store.searched = "";
        });
      this.welcomeHome = true;
    },
  },
};
</script>

<template>
  <div class="container flex">
    <AppHeader
      @buttonSearch="
        search(store.apiConfig.apiFilmUrl, store.apiConfig.apiTvUrl)
      "
    />
    <AppResoult v-if="this.welcomeHome" />
    <AppWelcomePage v-else />
  </div>

  <div v-if="this.error !== ''">{{ this.error }}</div>
</template>

<style scoped lang="scss">
.container {
  flex-direction: column;
  height: 100vh;
}
</style>
