<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    Home,
    Navbar,
  },
  created() {
    AOS.init({
      once: true,
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap");
@import "./assets/scss/global.scss";
#app {
  ::-webkit-scrollbar {
    /* Chrome, Safari and Opera */
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
