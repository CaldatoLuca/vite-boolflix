<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <label for="search">Cerca qui i tuoi film </label>
  <input v-model="store.filmSearched" type="text" name="search" />
  <button @click="$emit('buttonSearch')">invio</button>
</template>
