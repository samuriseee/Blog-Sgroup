import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { BPagination } from "bootstrap-vue";
import store from "./store/index";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.component("b-pagination", BPagination);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

<<<<<<< HEAD
// Initialize Firebase
=======
>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store";

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
