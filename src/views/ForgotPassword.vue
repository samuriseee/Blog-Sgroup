<template>
<div class="card"> 
    <modal  v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <loading v-if="loading" />
  <form class="box ms-9">
    <h1>Reset Password</h1>
    <input type="text" v-model="email" placeholder="Email" />
    <input type="submit" name="" value="Reset" @click.prevent="resetPassword"/>
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
</template>

<script>
import Loading from '../components/uncommon/Loading.vue'
import Modal from '../components/uncommon/Modal.vue'
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: { Modal, Loading },
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = "If your account exists, you will receive a email";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
}
</script>

