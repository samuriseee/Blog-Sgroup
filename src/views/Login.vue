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
        <a class="text-decoration-none text-muted" href="#">Forgot password?</a>
        <input type="submit" name="" value="Login" href="#" />
        <router-link
          class="text-decoration-none text-primary mb-2"
          to="/register"
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
          console.log(user);
          this.$router.push({ name: "Home" });
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
.card {
  margin-bottom: 20px;
  border: none;
}

.box {
  margin: 5% auto;
  width: 25%;
  padding: 40px;
  background: #191919;
  text-align: center;
  transition: 0.25s;
  border: 1px solid;
  border-radius: 10px;
}

.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
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
</style>
