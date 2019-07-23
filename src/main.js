import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import App from "./App.vue";

import "swiper/dist/css/swiper.css";
import "./assets/scss/index.scss";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
