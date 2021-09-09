<template>
  <div class="view-login">
    <div class="card">
      <form @submit.prevent="submitData" class="box ms-9">
        <h1>Sign up</h1>
        <div v-if="error !== ''" class="text-danger">
          {{ error }}
        </div>
        <input type="text" v-model="firstName" placeholder="First name" />
        <input type="text" v-model="lastName" placeholder="Last name" />
        <input type="text" v-model="username" placeholder="Username" />
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm Password"
        />
        <input type="submit" name="" value="Sign up" href="#" />
        <a class="text-decoration-none text-primary mb-2" href="/login"
          >Back to <span>login</span></a
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
import db from "../firebase/firebaseInit";
import messageRespone from "../services/authentication/responseMessage";
export default {
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
      confirmPassword: "",
      error: "",
    };
  },
  methods: {
    async submitData() {
      if ((await this.validation()) === true) {
        try {
          const createNewUser = firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          const result = await createNewUser;
          const dataBase = db.collection("users").doc(result.user.uid);
          await dataBase.set({
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
          });
          this.$router.push({ name: "Home" });
        } catch (error) {
          console.log(error);
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
      } else if (this.password !== this.confirmPassword) {
        this.error = messageRespone.VALIDATION.CONFIRMPASSWORD;
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
