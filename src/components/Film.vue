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
  <section class="films">
    <h2>Film</h2>
    <div v-if="store.filmTotalResults >= 1" class="images flex">
      <div v-for="(img, i) in filmImages" class="img-container">
        <img :src="img" :alt="`Immagine ${i + 1}`" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
