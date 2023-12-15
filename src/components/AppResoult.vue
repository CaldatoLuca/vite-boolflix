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
  },
};
</script>

<template>
  <Film />
  <Tv />
</template>
