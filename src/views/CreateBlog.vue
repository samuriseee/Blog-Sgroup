<template>
  <div class="container">
    <Loading v-show="loading" />
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div
      :class="{ invisible: !error }"
      class="err-message mt-3 mb-3 d-flex align-items-center"
    >
      <p><span>Error: </span>{{ this.errorMsg }}</p>
    </div>
    <input
      type="text"
      class="titleFullWidth"
      placeholder="Enter Blog Title"
      v-model="blogTitle"
    />

    <quill-editor
      v-model="blogContent"
      ref="myQuillEditor"
      :options="editorOption"
    />
    <div class="mainFunction">
      <div @click="uploadBlog" class="functionButton">Publish Blog</div>
      <router-link class="functionButton" to="/blog-preview"
        >Post Preview</router-link
      >
      <div class="upload-file">
        <label for="blog-photo" class="functionButton"
          >Upload Cover Photo</label
        >
        <input
          type="file"
          ref="blogPhoto"
          id="blog-photo"
          @change="fileChange"
          accept=".png, .jpg, .jpeg, .gif"
        />
        <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/uncommon/Loading.vue";
import Modal from "../components/uncommon/Modal.vue";
import firebase from "firebase/app";
import "firebase/storage";
import db from "../firebase/firebaseInit";
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor,
    Loading,
    Modal,
  },
  data: () => {
    return {
      file: null,
      loading: null,
      modalActive: false,
      modalMessage: "",
      editorOption: {
        debug: "default",
        placeholder: "Write your post here...",
        readOnly: true,
        theme: "snow",
      },
      firstName: "",
      lastName: "",
      error: null,
      errorMsg: null,
    };
  },
  created() {
    this.firstName = this.$store.state.profileFirstName;
    this.lastName = this.$store.state.profileLastName;
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.blogContent = "";
      this.blogPhotoName = "";
      this.blogCoverPhoto = "";
      this.blogTitle = "";
      this.$store.state.blogPhotoName = "";
      this.profileId = "";
      this.date = "";
      this.$router.push("/blogs/" + this.blogID);
    },
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },
    uploadBlog() {
      if (this.blogTitle !== "" && this.blogContent !== "") {
        if (this.file) {
          this.loading = true;
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(
            `documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`
          );
          docRef.put(this.file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
              this.loading = false;
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              const createdTime = await Date.now();
              const dataBase = await db.collection("blogs").doc();
              await dataBase.set({
                blogID: dataBase.id,
                blogContent: this.blogContent,
                blogCoverPhoto: downloadURL,
                blogCoverPhotoName: this.blogCoverPhotoName,
                blogTitle: this.blogTitle,
                profileId: this.profileId,
                author: this.fullName,
                date: createdTime,
              });
              await this.$store.dispatch("getPost");
              this.modalMessage = "Your post have succesfully uploaded";
              this.loading = false;
              this.modalActive = true;
              this.blogID = dataBase.id;
            }
          );
          return;
        }
        this.error = true;
        this.errorMsg = "Please upload a cover photo!";
        setTimeout(() => {
          this.error = false;
        }, 5000);
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill the title and content!";
      setTimeout(() => {
        this.error = false;
      }, 5000);
      return;
    },
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogContent: {
      get() {
        return this.$store.state.blogContent;
      },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      },
    },
    profileId() {
      return this.$store.state.profileId;
    },
    blogCoverPhotoName() {
      return this.$store.state.blogPhotoName;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  min-height: 100vh;
}
.quill-editor {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55vh;
  .ql-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
  }
}
.titleFullWidth {
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  height: 70px;
  font-size: 1.5rem;
  text-align: center;
  background-color: rgb(12, 12, 12);
  color: #fff;
  width: 100%;
  font-family: "Basis Grotesque Pro";
}
.mainFunction {
  display: flex;
  align-items: center;
  margin-top: 3rem;
  font-family: "Basis Grotesque Pro";
  .functionButton {
    width: 200px;
    padding: 10px;
    margin: 15px;
    border-radius: 10px;
    font-size: 1rem;
    text-decoration: none;
    background: rgb(0, 0, 0);
    color: #fff;
    cursor: pointer;
  }
  span {
    font-size: 1rem;
  }
  @media (max-width:991px) {
    display:grid;
    grid-template-columns: 1fr 1fr;
  }
}
.upload-file {
  input {
    display: none;
  }
  span {
    font-size: 1rem;
    align-self: center;
  }
  @media (max-width:991px) {
    display:flex;
    flex-direction: column !important;
  }
}

.invisible {
  opacity: 0 !important;
}

.err-message {
  width: 100%;
  border-radius: 8px;
  background-color: #303030;
  opacity: 1;
  transition: 0.5s ease all;

  p {
    color: #fff;
    font-size: 16px;
    margin: 1%;
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
