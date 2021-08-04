import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { BPagination } from "bootstrap-vue";
import store from "./store/index";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.component("b-pagination", BPagination);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Initialize Firebase

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
