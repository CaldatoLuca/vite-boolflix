<script>
import { store } from "../store";
import Film from "./Film.vue";
import Tv from "./Tv.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Film,
    Tv,
  },
  methods: {
    getFlag(array) {
      const flags = [];
      array.forEach((element) => {
        if (element.original_language === "en") {
          element.original_language = "gb";
        }
        if (element.original_language === "zh") {
          element.original_language = "cn";
        }
        if (element.original_language === "ja") {
          element.original_language = "jp";
        }
        flags.push(` fi-${element.original_language}`);
      });
      return flags;
    },
    getImage(array) {
      const images = [];
      array.forEach((element) => {
        images.push(this.store.pathImg + element.poster_path);
      });
      return images;
    },
    getVote(array) {
      const votes = [];
      array.forEach((element) => {
        votes.push(Math.round(element.vote_average / 2));
      });
      return votes;
    },
  },
};
</script>

<template>
  <main v-if="this.store.films.length > 0 || this.store.tvs.length > 0">
    <Film
      :filmFlags="getFlag(this.store.films)"
      :filmImages="getImage(this.store.films)"
      :filmVotes="getVote(this.store.films)"
    />
    <Tv
      :tvsFlags="getFlag(this.store.tvs)"
      :tvsImages="getImage(this.store.tvs)"
      :tvsVotes="getVote(this.store.tvs)"
    />
  </main>
  <div v-else>Nussun risultato trovato</div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
main {
  padding: 3.125rem;

  color: white;
}
</style>
