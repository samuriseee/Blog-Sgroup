<template>
  <div>
    <div class="card">
      <form @submit.prevent="submitData" class="box ms-9">
        <h1>Login</h1>
        <div v-if="error !== ''" class="text-danger">
          {{ error }}
        </div>
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <router-link class="text-decoration-none text-muted"  to="/reset-password">Forgot password?</router-link>
        <input type="submit" name="" value="Login" href="#" />
        <router-link
          class="text-decoration-none text-primary mb-2"
          :to="{ name: 'Register' }"
          >Sign up</router-link
        >
        <div class="col-md-12">
          <ul class="social-network social-circle">
            <li>
              <a href="#" class="icoFacebook" title="Facebook"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="#" class="icoTwitter" title="Twitter"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="#" class="icoGoogle" title="Google +"
                ><i class="fab fa-google-plus"></i
              ></a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import messageRespone from "../services/authentication/responseMessage";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async submitData() {
      if ((await this.validation()) === true) {
        try {
          const user = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
<<<<<<< HEAD
          console.log("user", user);
          this.$router.push({ name: "About" });
=======
            
          console.log(user);
          this.$router.push({ name: "Home" });
>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259
        } catch (error) {
          this.error = messageRespone.AUTHENTICATION.INCORRECT_ACCOUNT;
        }
      }
    },
    async validation() {
      this.error = "";
      if (!this.email) {
        this.error = messageRespone.VALIDATION.EMPTY_EMAIL;
        return false;
      } else if (!this.validEmail(this.email)) {
        this.error = messageRespone.VALIDATION.EMAIL;
        return false;
      } else if (!this.password || this.password.length < 6) {
        this.error = messageRespone.VALIDATION.PASSWORD;
        return false;
      }
      return true;
    },
    validEmail(email) {
      const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>

</style>
