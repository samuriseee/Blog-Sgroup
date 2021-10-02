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
<!-- <link href="http://fonts.cdnfonts.com/css/basis-grotesque-pro" rel="stylesheet">
    <link href="http://fonts.cdnfonts.com/css/imperator" rel="stylesheet">
    <link href="http://fonts.cdnfonts.com/css/harriet-text" rel="stylesheet"> -->\
  
<script>
<<<<<<< HEAD
import { mapActions } from "vuex";
=======

>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259
import defaultLayout from "./layout/default.vue";
import unauthLayout from "./layout/unauth.vue";
import firebase from "firebase/app";
import "firebase/auth";
<<<<<<< HEAD
=======

>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259
export default {
  components: {
    defaultLayout,
    unauthLayout,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getCurrentUser();
      }
    });
  },
  computed: {
    layout() {
      return this.$route.meta.layout === "LoginLayout"
        ? "unauthLayout"
        : "defaultLayout";
    },
  },
<<<<<<< HEAD
  methods: {
    ...mapActions(["getCurrentUser"]),
=======
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser", user);
      }
    });
    this.$store.dispatch("getPost")
>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259
  },
};
</script>
<!-- <link href="http://fonts.cdnfonts.com/css/basis-grotesque-pro" rel="stylesheet">
    <link href="http://fonts.cdnfonts.com/css/imperator" rel="stylesheet">
    <link href="http://fonts.cdnfonts.com/css/harriet-text" rel="stylesheet"> -->
<style lang="scss">
<<<<<<< HEAD
#app {
  font-family: "Harriet Text", sans-serif;
=======
@import url('http://fonts.cdnfonts.com/css/basis-grotesque-pro');
@import url('http://fonts.cdnfonts.com/css/imperator');
@import url('http://fonts.cdnfonts.com/css/harriet-text');
#app {
  // font-family: 'Harriet Text', sans-serif;
  font-family: 'Basis Grotesque Pro';
>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259
  font-weight: 400;
  text-align: center;
  overflow: hidden;
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
.b-pagination-pills .page-item .page-link {
  width: 50px;
  height: 50px;
    border-radius: 30rem !important;
    margin-left: 0.5rem;
    line-height: 1;
    color: #000;
    font-size:1.2rem;
    background: transparent;
    border: none;
    padding: 15px;
    
}
.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #181d25!important;
    border:none !important;
}
</style>
