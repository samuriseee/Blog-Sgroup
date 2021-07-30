<template>
  <div id="nav">
    <span class="logo" @click="$router.push('/blogs')">nordic rose</span>
    <ul>
    <!-- <li><router-link to="/">Home</router-link></li> -->
      <li><router-link to="/blogs">Blog</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/login">Login</router-link></li> -->
      <b-nav-item-dropdown text="User" right class="dropdown">
          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="/register">Register</b-dropdown-item>
          <b-dropdown-item to="/login">Login</b-dropdown-item>
          <b-dropdown-item to="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>
  </div>
</template>

<script>

export default {};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 1px solid $black;
  @media only screen and (min-width: 374px) and (max-width: 500px){
      justify-content: space-evenly;
    }
  .logo {
    font-size: 2.5rem;
    padding: 5px 12px;
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
    border-bottom: 3px solid $black;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
  }
}
</style>