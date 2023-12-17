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
    <!-- *griglia-->
    <div v-if="store.tvTotalResults >= 1" class="images flex">
      <!-- blocco immagine -->
      <div v-for="(img, i) in tvsImages" class="img-container">
        <!--  immagine -->
        <img :src="img" :alt="`Immagine ${i + 1}`" />

        <!-- card on hover -->
        <div class="card">
          <!-- titolo -->
          <h3>Titolo</h3>
          <div>{{ store.tvs[i].name }}</div>

          <!-- titolo originale -->
          <h3>Titolo Originale</h3>
          <div>{{ store.tvs[i].original_name }}</div>

          <!-- voto -->
          <h3>Voto</h3>
          <div class="star-vote">
            <div v-for="n in this.store.maxVote">
              <font-awesome-icon
                v-if="tvsVotes[i] >= n"
                icon="fa-solid fa-star"
              />
              <font-awesome-icon v-else icon="fa-regular fa-star" />
            </div>
          </div>

          <!-- lingua -->
          <div class="flex">
            <h3>Lingua</h3>
            <span class="fi" :class="tvsFlags[i]"></span>
          </div>

          <!-- overview -->
          <h3>Overwiev</h3>
          <div>{{ store.tvs[i].overview }}</div>
        </div>
      </div>
    </div>
    <!-- *se non ci sono serie tv -->
    <div v-else-if="store.filmTotalResults === 0">Nessun film trovato</div>
  </section>
</template>

<style scoped lang="scss"></style>
