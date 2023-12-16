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
  props: ["lang"],
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
  },
};
</script>

<template>
  <div v-if="this.store.films.length > 0 || this.store.tvs.length > 0">
    <Film
      :filmFlags="getFlag(this.store.films)"
      :filmImages="getImage(this.store.films)"
    />
    <Tv
      :tvsFlags="getFlag(this.store.tvs)"
      :tvsImages="getImage(this.store.tvs)"
    />
  </div>
  <div v-else>Nussun risultato trovato</div>
</template>
