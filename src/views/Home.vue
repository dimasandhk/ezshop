<template>
  <section class="home">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide mt-3"
        data-ride="carousel"
        data-aos="zoom-in"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/banner/2.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner/4.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner/5.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  <section class="home-product mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <h5>
            Weekly Discount <span class="badge badge-secondary">10%</span>
          </h5>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of showCard"
          :key="card"
          v-show="true"
        >
          <div
            class="card-cover mt-3"
            data-aos="fade-up"
            data-aos-delay="aosdelay * i"
          >
            <div class="card">
              <img
                src="../assets/img/product/furniture.png"
                class="card-img-top"
              />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: $102</li>
                <li class="list-group-item">
                  Rating: 10/10
                  <svg
                    style="vertical-align: 0.001em; margin-top: 1px"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
              </ul>
              <div class="card-body">
                <h5 class="card-title">Furniture {{ i + 1 }}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary shadow-none">Order</button>
              </div>
              <div class="card-footer">Sweden</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-4" data-aos="fade-up">
          <div
            class="btn-group text-light"
            role="group"
            aria-label="Basic example"
          >
            <button
              class="btn btn-primary shadow-none ld-more"
              :class="classObject"
              @click="showMoreContent"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer class="mt-5" />
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    showCard: 8,
  }),
  methods: {
    showMoreContent() {
      this.showCard += 4;
    },
    hideContent() {
      this.showCard -= 4;
    },
  },
  computed: {
    classObject() {
      return {
        "d-none": this.showCard >= 24,
      };
    },
    classObjectLS() {
      return {
        "d-none": this.showCard <= 9,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/global.scss";

.home {
  .carousel-inner {
    border-radius: 5px !important;
  }
}

.home-product {
  .badge-secondary {
    background-color: $main;
  }
  .btn-primary {
    &:hover {
      background-color: #c55638 !important;
      border: 1px solid #c55638 !important;
    }
    &:active:focus {
      background: $main !important;
      box-shadow: none !important;
    }
    border-radius: 7px;
    background-color: $main;
    border: 1px solid $main;
  }
}
</style>
