<template>
  <section class="search-product mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <h5>Search</h5>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><svg
                  style="color: black !important"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  /></svg
              ></span>
            </div>
            <input
              type="text"
              class="form-control shadow-none"
              placeholder="Type Here"
              aria-label="Search"
              aria-describedby="basic-addon1"
              v-model="inputValue"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary shadow-none"
                type="button"
                id="button-addon2"
                @click="showCard"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-show="!showed_card"></div>
        <!-- Electronic -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 4"
          :key="card"
          v-show="showed_card == 'Electronic'"
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
                <h5 class="card-title">Electronic {{ i + 1 }}</h5>
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
        <!-- Game -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 4"
          :key="card"
          v-show="showed_card == 'Game'"
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
                <h5 class="card-title">Game {{ i + 1 }}</h5>
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
        <!-- Grill -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="showed_card == 'Grill'"
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
                <h5 class="card-title">Grill {{ i + 1 }}</h5>
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
          v-show="showed_card == 'Furniture'"
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
        <!-- Kitchen -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="showed_card == 'Kitchen'"
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
                <h5 class="card-title">Kitchen {{ i + 1 }}</h5>
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
        <!-- Utensil -->
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="(card, i) of 8"
          :key="card"
          v-show="showed_card == 'Utensil'"
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
                <h5 class="card-title">{{ showed_card }} {{ i + 1 }}</h5>
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
      </div>
    </div>
  </section>
  <Footer class="mt-5" />
</template>

<script>
export default {
  data: () => ({
    inputValue: "electronic",
    showed_card: "Electronic",
  }),
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    showCard() {
      switch (this.capitalizeFirstLetter(this.inputValue)) {
        case "Electronic":
          this.showed_card = "Electronic";
          break;
        case "Game":
          this.showed_card = "Game";
          break;
        case "Grill":
          this.showed_card = "Grill";
          break;
        case "Furniture":
          this.showed_card = "Furniture";
          break;
        case "Utensil":
          this.showed_card = "Utensil";
          break;
        case "Kitchen":
          this.showed_card = "Kitchen";
          break;
        default:
          this.showed_card = "";
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/global.scss";

.search-product {
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
  .form-control {
    &:focus {
      border-color: $main !important;
    }
  }
}
</style>
