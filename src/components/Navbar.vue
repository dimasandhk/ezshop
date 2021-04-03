<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link class="navbar-brand" to="/"
          ><span>Ez</span>Shop</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <router-link
              class="nav-link mr-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              to="/"
              >Home</router-link
            >
            <router-link
              class="nav-link mr-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              to="/categories"
              >Categories</router-link
            >
            <router-link
              class="nav-link mr-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              to="/search"
              >Search</router-link
            >
            <router-link
              class="nav-link mr-3"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              to="/login"
              >Log In</router-link
            >
            <router-link
              class="btn btn-primary mr-3 shadow-none"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              to="/signup"
            >
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style lang="scss">
@import "../assets/scss/_global.scss";

.navbar {
  background: #fff;
  padding: 20px 0;
  .btn-primary {
    &:hover {
      background-color: #c55638;
    }
    &:active:focus {
      background: $main;
    }
    border-radius: 7px;
    background-color: $main;
    border: 1px solid $main;
  }
  .navbar-brand {
    span {
      color: $main;
    }
    font-weight: 600;
  }
  .nav-link:hover,
  .nav-link.router-link-exact-active {
    color: $main !important;
  }
}
</style>
