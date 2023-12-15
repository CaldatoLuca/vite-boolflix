<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getFlag(code) {
      if (code === "en") {
        code = "gb";
      }
      if (code === "zh") {
        code = "cn";
      }
      if (code === "ja") {
        code = "jp";
      }
      return ` fi-${code}`;
    },
  },
};
</script>

<template>
  <h1>Movies</h1>
  <div class="container" v-if="store.filmTotalResults >= 1">
    <div>
      <h2>Titolo</h2>
      <ul>
        <li v-for="title in store.films">
          {{ title.title }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Titolo originale</h2>
      <ul>
        <li v-for="originalTitle in store.films">
          {{ originalTitle.original_title }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Lingua</h2>
      <ul>
        <li v-for="language in store.films">
          <span class="fi" :class="getFlag(language.original_language)"></span>
          <span v-if="language.original_language === null"></span>
          <span v-if="language.original_language === ''"></span>
        </li>
      </ul>
    </div>
    <div>
      <h2>Voto</h2>
      <ul>
        <li v-for="vote in store.films">
          {{ vote.vote_average }}
        </li>
      </ul>
    </div>
  </div>
  <div v-else-if="store.filmTotalResults === 0">Nessun film trovato</div>
</template>

<style>
.container {
  display: flex;
}
h2 {
  text-align: center;
}
</style>
