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
  <section class="tvs">
    <h2>Serie TV</h2>
    <div v-if="store.tvTotalResults >= 1" class="images flex">
      <div v-for="(img, i) in tvsImages" class="img-container">
        <img :src="img" :alt="`Immagine ${i + 1}`" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
