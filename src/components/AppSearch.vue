<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  emit: ["buttonSearch"],
};
</script>

<template>
  <form @submit.prevent="$emit('buttonSearch')">
    <label for="search">Cerca qui i tuoi film </label>
    <input v-model="store.filmSearched" type="text" id="search" />
    <button>invio</button>
  </form>
</template>
