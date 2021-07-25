import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const firebaseConfig = {
  apiKey: "AIzaSyCmEsx1bAezxDU639Fd5pqfNlGeckmLkJY",
  authDomain: "blog-sgroup.firebaseapp.com",
  projectId: "blog-sgroup",
  storageBucket: "blog-sgroup.appspot.com",
  messagingSenderId: "329854933967",
  appId: "1:329854933967:web:0f9df333bd526abed890ba",
  measurementId: "G-DXMNG8J33C",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
