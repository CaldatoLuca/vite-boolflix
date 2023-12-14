<script>
import AppSearch from "./components/AppSearch.vue";

export default {
  components: {
    AppSearch,
  },
  methods: {
    searchFilm() {
      console.log("ciao");
    },
  },
};
</script>

<template>
  <h1>Boolflix</h1>
  <AppSearch @buttonSearch="searchFilm" />
</template>
