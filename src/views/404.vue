<template>
  <section class="router-404 mt-5">
    <div class="container text-center justify-content-center">
      <img src="../assets/img/404_illustration.svg" alt="" />
      <h3 class="mt-4">it seems that this page is not found</h3>
      <router-link to="/" class="back-404">Back To Home Page</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/global.scss";

.router-404 {
  .back-404 {
    color: $main;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
