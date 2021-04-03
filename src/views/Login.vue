<template>
  <section class="login-page">
    <div class="container text-center">
      <h3 class="text-center" data-aos="fade-down">
        Log in to <span>Ez</span>Shop
      </h3>
      <div class="row justify-content-center mt-4">
        <form name="ezshop-login-form">
          <div class="tempat-alert"></div>
          <div class="mb-3 text-left">
            <label for="name" class="form-label">Email</label>
            <input
              type="email"
              class="form-control shadow-none"
              id="email"
              aria-describedby="email"
              name="email-pengirim"
              required
            />
          </div>
          <div class="mb-3 text-left">
            <label for="email" class="form-label">Password</label>
            <input
              type="password"
              class="form-control shadow-none"
              id="password"
              aria-describedby="password"
              name="password-pengirim"
              required
            />
          </div>
          <div class="mb-3">
            <p class="teks-sub">
              Forgot Password?
              <router-link to="/signup" class="rout-link"
                >Recover Here!</router-link
              >
            </p>
          </div>
          <div class="text">
            <button
              type="submit"
              class="btn btn-primary btn-kirim mt-2 btn-block shadow-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div class="row justify-content-center al-gaada">
        <div class="alert alert-luar alert-primary mt-5" role="alert">
          New to EzShop?
          <router-link class="rout-alert" to="/signup"
            >Create an Account</router-link
          >
        </div>
      </div>
      <div class="row justify-content-center">
        <p class="text-center teks-sub">Terms, Privacy, and Security EzShop</p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
@import "../assets/scss/global.scss";

.login-page {
  .al-gaada {
    margin-top: -35px;
  }
  .teks-sub {
    color: #ced4da;
    font-size: 14px;
  }
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
  .alert-primary {
    background: none;
    border: 1px solid #ced4da;
  }
  h3 {
    span {
      color: $main;
    }
  }
  form {
    .rout-link {
      color: $main;
    }
    width: 40%;
  }
  .alert-luar {
    .rout-alert {
      color: $main;
    }
    color: #acacac;
    width: 40%;
  }
  margin-top: 100px;
  margin-bottom: 100px;
}

@media only screen and (max-width: 768px) {
  form {
    width: 90% !important;
  }
  .alert-luar {
    width: 90% !important;
  }
}
</style>
