import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "swiper/dist/css/swiper.css";

import "./assets/scss/index.scss";

Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
