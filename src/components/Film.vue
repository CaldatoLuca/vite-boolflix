<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      isOpen: "h-400",
    };
  },
  props: ["filmFlags", "filmImages", "filmVotes"],
  methods: {
    showCard() {
      return this.isOpen;
    },
    openCard() {
      if (this.isOpen === "h-400") {
        this.isOpen = "h-auto";
      } else if (this.isOpen === "h-auto") {
        this.isOpen = "h-400";
      }
    },
  },
};
</script>

<template>
  <section class="films">
    <h2>Film</h2>
    <!-- *griglia-->
    <div v-if="store.filmTotalResults >= 1" class="images flex">
      <!-- blocco immagine -->
      <div v-for="(img, i) in filmImages" class="img-container">
        <!-- immagine -->
        <img :src="img" :alt="`Immagine ${i + 1}`" />

        <!-- card on hover -->
        <div class="card" :class="showCard()">
          <!-- bottone -->
          <button class="btn" @click="openCard">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>

          <!-- titolo -->
          <h3>Titolo</h3>
          <div>{{ store.films[i].title }}</div>

          <!-- titolo originale -->
          <h3>Titolo Originale</h3>
          <div>{{ store.films[i].original_title }}</div>

          <!-- voto -->
          <h3>Voto</h3>
          <div class="flex">
            <div v-for="n in this.store.maxVote">
              <font-awesome-icon
                v-if="filmVotes[i] >= n"
                icon="fa-solid fa-star"
              />
              <font-awesome-icon v-else icon="fa-regular fa-star" />
            </div>
          </div>

          <!-- lingua -->
          <div>
            <h3>Lingua</h3>
            <span class="fi" :class="filmFlags[i]"></span>
          </div>

          <!-- overview -->
          <h3>Overwiev</h3>

          <div>{{ store.films[i].overview }}</div>
        </div>
      </div>
    </div>
    <!-- *se non ci sono film -->
    <div v-else-if="store.filmTotalResults === 0">Nessun film trovato</div>
  </section>
</template>

<style scoped lang="scss"></style>
