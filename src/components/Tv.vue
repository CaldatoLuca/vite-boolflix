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
    getImage(posterPath) {
      return this.store.pathImg + posterPath;
    },
  },
};
</script>

<template>
  <h1>Tv Series</h1>
  <div class="images">
    <div v-for="img in store.tvs">
      <img :src="getImage(img.poster_path)" :alt="img.title" />
    </div>
  </div>
  <div class="container" v-if="store.tvTotalResults >= 1">
    <div>
      <h2>Titolo</h2>
      <ul>
        <li v-for="title in store.tvs">
          {{ title.name }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Titolo originale</h2>
      <ul>
        <li v-for="originalTitle in store.tvs">
          {{ originalTitle.name }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Lingua</h2>
      <ul>
        <li v-for="language in store.tvs">
          <span class="fi" :class="getFlag(language.original_language)"></span>
          <span v-if="language.original_language === null"></span>
          <span v-if="language.original_language === ''"></span>
        </li>
      </ul>
    </div>
    <div>
      <h2>Voto</h2>
      <ul>
        <li v-for="vote in store.tvs">
          {{ vote.vote_average }}
        </li>
      </ul>
    </div>
  </div>
  <div v-else-if="store.tvTotalResults === 0">Nessuna serie tv trovata</div>
</template>

<style></style>
