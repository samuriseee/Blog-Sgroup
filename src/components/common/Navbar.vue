<template>
  <div id="nav">
    <img class="logoImage" @click="$router.push('/')" src="https://yt3.googleusercontent.com/e8P1A4RdQYbCQdoDBPamz_G_Yl5bSEtdvQquhvWEKy5sYmR1BpIcDinyGxYqB1fQRdO0CB_Q=s900-c-k-c0x00ffffff-no-rj" alt="">
    <!-- <span class="logo" @click="$router.push('/')">Jazzin Blogs</span> -->
    <ul class="navigation">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blogs">Blogs</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/create-blog">Create Blog</router-link></li>
      <div class="profile" @click="toggleProfileMenu()">
        <span>{{ this.$store.state.profileInitials }}</span>
        <div class="profile-menu" v-show="toggleMenu">
          <router-link class="info" to="/profile">
            <p class="initials">{{ this.$store.state.profileInitials }}</p>
            <div class="right">
              <p>
                {{ this.$store.state.profileFirstName }}
                {{ this.$store.state.profileLastName }}
              </p>
              <p>{{ this.$store.state.profileUsername }}</p>
              <p style="font-size:0.7rem">{{ this.$store.state.profileEmail }}</p>
            </div>
          </router-link>
          <div class="profileOptions">
            <div class="profileItem">
              <router-link to="/profile" class="profileItem">
                <b-icon icon="person-fill"></b-icon>
                <p>Profile</p>
              </router-link>
            </div>
            <div class="profileItem">
              <div class="profileItem" @click="signOut">
                <b-icon icon="box-arrow-right"></b-icon>
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
    <div class="menuToggle" @click="toggleNavBarMenu()"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      user: null,
      toggleMenu: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut();
        this.$router.replace({ name: "Login" });
      } catch (error) {
        console.log(error.message);
      }
    },
    toggleProfileMenu() {
      this.toggleMenu = !this.toggleMenu;
    },
    toggleNavBarMenu() {
      const menuToggle = document.querySelector(".menuToggle");
      const navigation = document.querySelector(".navigation");
      menuToggle.classList.toggle("active");
      navigation.classList.toggle("active");
    },
  },
  mounted() {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("#nav");
      nav.classList.toggle("sticky", window.scrollY > 0);
    });
  }
};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0px 50px 0;
  border-bottom: 1px solid #c6c6c6;
  background: #fffefe;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  .logo {
    font-size: 2.5rem;
    padding: 0 5px 10px;
    text-transform: uppercase;
    font-family: "Imperator", sans-serif;
    
    transition: 0.3s ease-in-out;
    @media (max-width: 1000px) {
      font-size: 2rem;
      padding: 5px;
    } 
  }
    @media (max-width:450px) {
      padding: 0px 10px 0;
    }
  .menuToggle {
    display: none;
  }
  a {
    font-weight: bold;
    color: $black;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: 10px 20px;
  }
  a.router-link-exact-active {
    color: $black;
    border-bottom: 2px solid $black;
  }
  .navigation {
    display: flex;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    margin-bottom: 0;
    height: 100%;
    transition: 0.3s ease-in-out;
    @media (max-width:1000px) {
      display:none;
    }
  }
}

.navigation li {
  height: 100%;
  font-family: 'Harriet Text', sans-serif;
  a {
    height: 100%;
  }
  @media (max-width:1000px) {
    height: 10%;
    padding: 30px;
    font-size:1.5rem;
  }
}
.nav-link .dropdown-toggle {
  color: #000 !important;
  font-size: 1.2rem !important;
}
.profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fffefe;
    background-color: #000000;
    padding: 5px;
    pointer-events: none;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 1rem;
  }
  .profile-menu {
    position: absolute;
    top: 60px;
    right: 0;
    width: 250px;
    background: #000000;
    .info {
      display: flex;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #fffefe;
      .initials {
        position: initial;
        width: 45px;
        height: 45px;
        margin-top: 10px;
        background-color: #fff;
        color: #303030;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      .right {
        color: #fff;
        text-align: left;
        flex: 1;
        margin: 0 0 10px 24px;
        font-weight: 300;
        align-items: baseline;
        p {
          text-transform: lowercase;
          margin: 5px 0 -7px 0;
        }
        p:nth-child(1) {
          font-size: 16px;
        }
        p:nth-child(2),
        p:nth-child(3) {
          font-size: 14px;
        }
      }
    }
  }
}
.profileOptions {
  padding: 15px;
  .profileItem {
    margin: -10px 0px;
    color: #fff !important;
    display: flex;
    p {
      margin: 1em;
    }
    align-items: center !important;
    justify-content: space-between !important;
    padding: 5px !important;
    font-weight: 300 !important;
    font-size: 1rem !important;

    .b-icon.bi {
      font-size: 1.5rem !important;
    }
  }
}

.sticky {
  background: #fff;
  padding: 10px 100px;
  box-shadow: 0 5px 20px rgb(0, 0, 0, 0.05);
}
@media (max-width: 1000px) {
  #nav {
    align-items: center;
  }
  .navigation {
    display:none;
  }
  .navigation.active {
    width: 100% !important;
    height: 100% !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
    background: #fff !important;
  }
  header .navigation.active li {
    margin-left: 0rem;
    padding: 10px;
  }
  header .navigation.active li a {
    font-size: 1.6em;
    color: #000;
    font-weight: 300px;
  }
  .menuToggle {
    display:block !important;
    position: relative;
    width: 40px;
    height: 40px;
    background: url("../../assets/menu.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    filter: invert(1);
  }
  .menuToggle.active {
    background: url("../../assets/close.png");
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 9;
    filter: invert(1);
  }
}
.logoImage {
  width: 75px;
  height: 75px;
  cursor: pointer;
}
</style>
