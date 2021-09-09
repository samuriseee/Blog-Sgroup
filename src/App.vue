<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </transition>
  </div>
</template>

<script>
import defaultLayout from "./layout/default.vue";
import unauthLayout from "./layout/unauth.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  components: {
    defaultLayout,
    unauthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout === "LoginLayout"
        ? "unauthLayout"
        : "defaultLayout";
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser", user);
      }
    });
  },
};
</script>
<style lang="scss">

#app {
  font-family: 'Harriet Text', sans-serif;
  font-weight: 400;
  text-align: center;
}
.card {
  min-height:100vh;
  border: none;
  text-align: center;
  justify-content: center;
  display:flex;
}
.box {
  margin: 5% auto;
  width: 500px;
  padding: 20px;
  background: #191919;
  flex-direction: column;
  transition: 0.25s;
  border: 1px solid;
  border-radius: 10px;
  
}

.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 15px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 60%;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  padding: 30px 0px;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 75%;
  border-color: #2ecc71;
}

.box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="submit"]:hover {
  background: #2ecc71;
}

.forgot {
  text-decoration: underline;
}

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}

.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}

.social-network a.icoTwitter:hover {
  background-color: #33ccff;
}

.social-network a.icoGoogle:hover {
  background-color: #bd3518;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
  color: #fff;
}

a.socialIcon:hover,
.socialHoverClass {
  color: #44bcdd;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
}

.social-circle li i {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  transform: rotate(360deg);
  transition: all 0.2s;
}

.social-circle i {
  color: #fff;
  transition: all 0.8s;
  transition: all 0.8s;
}
.text-primary {
  color:#4795fa !important;
  
}
</style>

