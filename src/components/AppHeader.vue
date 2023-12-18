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
  <header class="flex align-center">
    <AppLogo />
    <!-- !select -->
    <label for="genre-search" class="none">Cerca per genere </label>

    <select
      v-model="store.searchGenre"
      name="genre-search"
      @change="$emit('selectSearch')"
    >
      <option value="">All</option>
      <option v-for="search in store.genres" :value="search.id">
        {{ search.name }}
      </option>
    </select>
    <form @submit.prevent="$emit('buttonSearch')" class="flex">
      <!-- !barra di ricerca -->
      <label for="search" class="none">Cerca qui i tuoi film </label>
      <input
        v-model="store.searched"
        type="text"
        id="search"
        placeholder="Search..."
      />
      <button>
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          id="icon-search"
        />
      </button>
    </form>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

header {
  padding: 1.875rem 2.5rem;
  background-color: $black;
  box-shadow: 0px 10px 13px -7px black;
  form {
    flex-grow: 1;
    justify-content: flex-end;
    #search {
      width: 30%;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      border: none;
      padding: 10px;
    }
    button {
      padding: 10px;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      border: none;
      cursor: pointer;
      background-color: white;
      #icon-search {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
