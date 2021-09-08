<template>
  <div id="nav">
    <span class="logo" @click="$router.push('/blogs')">nordic rose</span>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blogs">Blog</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/login">Login</router-link></li> -->
      <b-nav-item-dropdown
        text="User"
        right
        class="dropdown d-flex align-items-center"
      >
        <b-dropdown-item to="#">Profile</b-dropdown-item>
        <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut();
        this.$router.replace({ name: "Login" });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
#nav {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  padding: 15px 50px 0;
  border-bottom: 1px solid #c6c6c6;
  height: 100px;
  .logo {
    font-size: 2.5rem;
    padding: 0 5px 10px;
    text-transform: uppercase;
    font-family: "Imperator", sans-serif;
    cursor: pointer;
    @media only screen and (min-width: 200px) and (max-width: 500px) {
      display:none;
    }
    @media only screen and (min-width: 510px) and (max-width: 1000px) {
      font-size: 2rem;
      padding: 5px;
    }
  }
  a {
    font-weight: bold;
    color: $black;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: 10px;
  }
  a.router-link-exact-active {
    color: $black;
    border-bottom: 2px solid $black;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    margin-bottom: 0;
    height: 100%;
  }
}

li {
  height: 100%;

  a {
    height: 100%;
  }
}
.nav-link .dropdown-toggle {
  color: #000 !important;
  font-size: 1.2rem !important;
}
</style>