<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      cardClass: "none",
      imgClass: "block",
    };
  },
  props: ["filmFlags", "filmImages", "filmVotes"],
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
        <div class="card">
          <!-- titolo -->
          <h3>Titolo</h3>
          <div>{{ store.films[i].title }}</div>

          <!-- titolo originale -->
          <h3>Titolo Originale</h3>
          <div>{{ store.films[i].original_title }}</div>

          <!-- voto -->
          <h3>Voto</h3>
          <div class="star-vote">
            <div v-for="n in this.store.maxVote">
              <font-awesome-icon
                v-if="filmVotes[i] >= n"
                icon="fa-solid fa-star"
              />
              <font-awesome-icon v-else icon="fa-regular fa-star" />
            </div>
          </div>

          <!-- lingua -->
          <div class="flex">
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
