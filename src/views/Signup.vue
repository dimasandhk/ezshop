<template>
  <section class="signup-page">
    <div class="container">
      <h3 data-aos="fade-down" class="text-center">
        Buy and sell things <br />
        <span>Quickly</span> and <span>Easily</span>
      </h3>
      <div class="row justify-content-center">
        <form class="mt-3">
          <div class="form-group mt-2">
            <label for="fullname" class="text-left">Full Name</label>
            <input
              type="text"
              name="fullname"
              class="form-control shadow-none"
              required
            />
          </div>
          <div class="form-group mt-2">
            <label for="email" class="text-left">Email</label>
            <input
              type="email"
              name="email"
              class="form-control shadow-none"
              v-model="eg_email"
              required
            />
          </div>
          <div class="form-group mt-2">
            <label for="password" class="text-left">Password</label>
            <input
              type="password"
              name="password"
              class="form-control shadow-none"
              required
            />
          </div>
          <div class="form-group mt-2">
            <label class="text-left">Store</label>
            <p class="text-muted">Do you also want to open a shop?</p>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                class="custom-control-input shadow-none"
                type="radio"
                name="is_store_open"
                id="openStoreTrue"
                v-model="is_store_open"
                :value="true"
              />
              <label class="custom-control-label" for="openStoreTrue"
                >Yes, please</label
              >
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                class="custom-control-input shadow-none"
                type="radio"
                name="is_store_open"
                id="openStoreFalse"
                v-model="is_store_open"
                :value="false"
              />
              <label makasih class="custom-control-label" for="openStoreFalse"
                >No, thank you</label
              >
            </div>
          </div>
          <div class="form-group mt-2" v-show="is_store_open == true">
            <label for="storename" class="text-left">Store Name</label>
            <input
              type="text"
              name="storename"
              class="form-control shadow-none"
              v-model="store_name"
              required
            />
          </div>
          <div class="form-group mt-2" v-show="is_store_open == true">
            <label for="storename" class="text-left shadow-none"
              >Category</label
            >
            <select
              name="category"
              class="form-control select-category shadow-none"
              @change="changeCategory()"
            >
              <option value="gadget">Gadget</option>
              <option value="electronics">Electronics</option>
              <option value="other">Others</option>
            </select>
          </div>
          <div class="form-group mt-2" v-show="selectedIndex == 'other'">
            <input
              type="text"
              class="form-control shadow-none"
              placeholder="Type your store category here"
              v-model="categoryPath"
            />
          </div>
          <div class="form-group mt-2" v-show="is_store_open == true">
            <p class="text-muted">
              ezshop.com/{{ storeName }}{{ otherSelectedIndex }}
            </p>
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block mt-4 shadow-none"
          >
            Sign Up Now
          </button>
          <router-link
            to="/login"
            class="btn btn-signup btn-block mt-2 shadow-none"
            >Back to Login</router-link
          >
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    is_store_open: true,
    store_name: "store name",
    eg_email: "example@domain.com",
    selectedIndex: "gadget",
    categoryPath: "",
  }),
  methods: {
    changeCategory() {
      let selectBox = document.querySelector(".select-category");
      this.selectedIndex = selectBox.options[selectBox.selectedIndex].value;
    },
  },
  computed: {
    storeName() {
      return this.store_name.replace(/\s+/g, "-").toLowerCase();
    },
    otherSelectedIndex() {
      let hasil;
      if (this.selectedIndex == "other") {
        if (this.categoryPath == "") {
          hasil = "";
        } else {
          hasil = this.categoryPath.replace(/\s+/g, "-").toLowerCase();
        }
      } else {
        hasil = this.selectedIndex;
      }
      return `?c=${hasil}`;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/global.scss";
.signup-page {
  .btn-signup {
    &:hover {
      color: #818181;
    }
    background-color: #e6e4e4;
    color: #bbbbbb;
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
  form {
    .text-muted {
      margin-top: -5px;
    }
    width: 40%;
  }
  h3 {
    span {
      color: $main;
    }
  }
  margin-top: 80px;
  margin-bottom: 100px;
}

@media only screen and (max-width: 768px) {
  .signup-page {
    margin-bottom: 55px;
  }
}
</style>
