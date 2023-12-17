<script>
export default {};
</script>

<template>
  <div class="title flex align-center justify-center">
    <h1 id="logo1">B</h1>
    <h1 id="logo2">boolflix</h1>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.title {
  font-family: "Bebas Neue", sans-serif;
  #logo1 {
    color: $beige;
    font-size: 4.375rem;
    margin-right: 1rem;
  }
  #logo2 {
    color: $blue-100;
    font-size: 2.8125rem;
  }
}
</style>
