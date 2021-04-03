import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import Footer from "./components/Footer.vue";

createApp(App).component("Footer", Footer).use(router).mount("#app");
