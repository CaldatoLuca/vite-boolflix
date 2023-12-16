<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: ["tvsFlags", "tvsImages", "tvsVotes"],

  methods: {
    getImage(posterPath) {
      return this.store.pathImg + posterPath;
    },
  },
};
</script>

<template>
  <h1>Tv Series</h1>
  <div class="images">
    <div v-for="(img, i) in tvsImages">
      <img :src="img" :alt="`Immagine ${i + 1}`" />
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
          {{ originalTitle.original_name }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Lingua</h2>
      <ul>
        <li v-for="language in tvsFlags">
          <span class="fi" :class="language"></span>
          <span v-if="language.original_language === null"></span>
          <span v-if="language.original_language === ''"></span>
        </li>
      </ul>
    </div>
    <div>
      <h2>Voto</h2>
      <ul>
        <li v-for="vote in tvsVotes">
          {{ vote }}
        </li>
      </ul>
    </div>
  </div>
  <div v-else-if="store.tvTotalResults === 0">Nessuna serie tv trovata</div>
</template>

<style></style>
