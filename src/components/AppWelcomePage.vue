<script>
import AppLogo from "./AppLogo.vue";
export default {
  components: {
    AppLogo,
  },
};
</script>

<template>
  <div class="welcome-page flex align-center justify-center">
    <div class="welcome-text">
      <AppLogo />
      <div class="slogan">"Il tuo show inizia qui!"</div>
      <div>
        "Entra nel mondo di Boolflix e scopri i migliori film e serie tv del
        momento."
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome-page {
  flex-grow: 1;
  gap: 50px;

  .welcome-text {
    text-align: center;
    font-family: "Bebas Neue", sans-serif;

    font-size: 1.5625rem;

    .slogan {
      font-size: 3.125rem;
      margin-bottom: 1.25rem;
    }
  }
}
</style>
