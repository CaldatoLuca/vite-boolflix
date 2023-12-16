<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: ["filmFlags", "filmImages", "filmVotes"],
};
</script>

<template>
  <h1>Movies</h1>
  <div class="images">
    <div v-for="(img, i) in filmImages">
      <img :src="img" :alt="`Immagine ${i + 1}`" />
    </div>
  </div>
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
        <li v-for="language in filmFlags">
          <span class="fi" :class="language"></span>
          <span v-if="language.original_language === null"></span>
          <span v-if="language.original_language === ''"></span>
        </li>
      </ul>
    </div>
    <div>
      <h2>Voto</h2>
      <ul>
        <li v-for="vote in filmVotes">
          {{ vote }}
        </li>
      </ul>
    </div>
  </div>
  <div v-else-if="store.filmTotalResults === 0">Nessun film trovato</div>
</template>

<style></style>
