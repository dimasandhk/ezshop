<template>
  <section class="categories mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-down">
          <h5 style="font-weight: 500">All Categories</h5>
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-6 col-md-4 col-lg-2">
          <div
            @click="currCategory = 'Grill'"
            class="category-card mt-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="../assets/img/svg/garden-barbecue.svg" alt="" />
            <p class="mt-2">Grill</p>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div
            @click="currCategory = 'Electronic'"
            class="category-card mt-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src="../assets/img/svg/audio-equipment.svg" alt="" />
            <p class="mt-2">Electronic</p>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div
            @click="currCategory = 'Furniture'"
            class="category-card mt-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src="../assets/img/svg/armchair-frontal.svg" alt="" />
            <p class="mt-2">Furniture</p>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div
            @click="currCategory = 'Kitchen'"
            class="category-card mt-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src="../assets/img/svg/kitchen-oven.svg" alt="" />
            <p class="mt-2">Kitchen</p>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div
            @click="currCategory = 'Game'"
            class="category-card mt-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src="../assets/img/svg/console-controller.svg" alt="" />
            <p class="mt-2">Game</p>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div
            @click="currCategory = 'Utensil'"
            class="category-card mt-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src="../assets/img/svg/wrench-and-hammer.svg" alt="" />
            <p class="mt-2">Utensil</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="product mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <h5>
            {{ currCategory }} Products
            <span class="badge badge-secondary">New</span>
          </h5>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- Grill -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="currCategory == 'Grill'"
        >
          <div
            class="card-cover mt-3"
            data-aos="fade-up"
            data-aos-delay="aosdelay * i"
          >
            <div class="card">
              <img
                src="../assets/img/product/grill.webp"
                class="card-img-top"
              />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: $75</li>
                <li class="list-group-item">
                  Rating: 9/10
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
                <h5 class="card-title">{{ currCategory }} {{ i + 1 }}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary shadow-none">Order</button>
              </div>
              <div class="card-footer">San Fransisco</div>
            </div>
          </div>
        </div>
        <!-- Furniture -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="currCategory == 'Furniture'"
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
                <h5 class="card-title">{{ currCategory }} {{ i + 1 }}</h5>
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
        <!-- Kitchen -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="currCategory == 'Kitchen'"
        >
          <div
            class="card-cover mt-3"
            data-aos="fade-up"
            data-aos-delay="aosdelay * i"
          >
            <div class="card">
              <img
                src="../assets/img/product/kitchen.jpg"
                class="card-img-top"
              />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: $55</li>
                <li class="list-group-item">
                  Rating: 7/10
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
                <h5 class="card-title">{{ currCategory }} {{ i + 1 }}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary shadow-none">Order</button>
              </div>
              <div class="card-footer">Indonesia</div>
            </div>
          </div>
        </div>
        <!-- Game -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="currCategory == 'Game'"
        >
          <div
            class="card-cover mt-3"
            data-aos="fade-up"
            data-aos-delay="aosdelay * i"
          >
            <div class="card">
              <img src="../assets/img/product/game.png" class="card-img-top" />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: $345</li>
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
                <h5 class="card-title">{{ currCategory }} {{ i + 1 }}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary shadow-none">Order</button>
              </div>
              <div class="card-footer">Washington DC</div>
            </div>
          </div>
        </div>
        <!-- Utensil -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="currCategory == 'Utensil'"
        >
          <div
            class="card-cover mt-3"
            data-aos="fade-up"
            data-aos-delay="aosdelay * i"
          >
            <div class="card">
              <img
                src="../assets/img/product/utensil.jpg"
                class="card-img-top"
              />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: $25</li>
                <li class="list-group-item">
                  Rating: 9/10
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
                <h5 class="card-title">{{ currCategory }} {{ i + 1 }}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary shadow-none">Order</button>
              </div>
              <div class="card-footer">Indonesia</div>
            </div>
          </div>
        </div>
        <!-- Electronic -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="currCategory == 'Electronic'"
        >
          <div
            class="card-cover mt-3 tes-123"
            data-aos="fade-up"
            data-aos-delay="aosdelay * i"
          >
            <div class="card">
              <img
                src="../assets/img/product/electronic.jpg"
                class="card-img-top"
              />
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: $275</li>
                <li class="list-group-item">
                  Rating: 8/10
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
                <h5 class="card-title">{{ currCategory }} {{ i + 1 }}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary shadow-none">Order</button>
              </div>
              <div class="card-footer">Shanghai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer class="mt-5" />
</template>

<script>
export default {
  data: () => ({
    currCategory: "Grill",
    aos_delay: 100,
    thumbPath: "../assets/img/product/",
  }),
  methods: {
    changeImg() {
      if (this.currCategory == "Grill") {
        document
          .querySelector(".card-img-top")
          .setAttribute("src", `${this.thumbPath}grill.webp`);
      } else if (this.currCategory == "Electronic") {
        document
          .querySelector(".card-img-top")
          .setAttribute("src", `${this.thumbPath}electronic.webp`);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/global.scss";
.categories {
  img {
    width: 50%;
  }
  .col-6 {
    &:hover {
      margin-top: -2px !important;
    }
    transition: all 0.2s ease-in-out;
  }
  .category-card {
    background-color: #f4f4f4;
    padding-top: 20px;
    cursor: pointer;
    border-radius: 6px;
    padding-bottom: 7px;
  }
}

.product {
  .badge-secondary {
    background-color: $main;
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
}

@media only screen and (max-width: 768px) {
  .product {
    .card {
      .card-text {
        font-size: 12px;
      }
    }
  }
}
</style>
