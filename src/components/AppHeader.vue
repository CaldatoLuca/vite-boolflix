<script>
import { store } from "../store.js";
import AppLogo from "./AppLogo.vue";

export default {
  data() {
    return {
      store,
    };
  },
  emit: ["buttonSearch"],
  components: {
    AppLogo,
  },
};
</script>

<template>
  <header class="flex justify-between align-center">
    <AppLogo />
    <form @submit.prevent="$emit('buttonSearch')">
      <label for="search">Cerca qui i tuoi film </label>
      <input v-model="store.searched" type="text" id="search" />
      <button>invio</button>
    </form>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

header {
  padding: 1.875rem 2.5rem;
  background-color: $black;
  box-shadow: 0px 10px 13px -7px black;
}
</style>
