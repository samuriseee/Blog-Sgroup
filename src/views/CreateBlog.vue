<template>
  <div class="container">
    <Loading v-show="loading" />
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <input
      type="text"
      class="titleFullWidth"
      placeholder="Enter Blog Title"
      v-model="createBlogTitle"
    />

    <quill-editor
      v-model="createBlogContent"
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
      loading: null,
      modalActive: false,
      modalMessage: "",
      editorOption: {
        debug: "default",
        placeholder: "Write your post here...",
        readOnly: true,
        theme: "snow",
      },
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.blogID = "";
      this.createBlogContent = "";
      this.blogCoverPhoto = "";
      this.blogCoverPhotoName = "";
      this.createBlogTitle = "";
      this.profileId = "";
      this.date ="";
    },
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },
    uploadBlog() {
      if (
        this.createBlogTitle.length !== 0 &&
        this.createBlogContent.length !== 0
      ) {
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
                createBlogContent: this.createBlogContent,
                blogCoverPhoto: downloadURL,
                blogCoverPhotoName: this.blogCoverPhotoName,
                createBlogTitle: this.createBlogTitle,
                profileId: this.profileId,
                date: createdTime,
              });
              this.modalMessage =
                "Your post have succesfully uploaded";
              this.loading = false;
              this.modalActive = true;
              await this.$store.dispatch("getPost");
            }
          );
          return;
        }
        return;
      }
      return;
    },
  },
  computed: {
    createBlogTitle: {
      get() {
        return this.$store.state.createBlogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    createBlogContent: {
      get() {
        return this.$store.state.createBlogContent;
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
  margin: 0 auto;
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
}
.upload-file {
  input {
    display: none;
  }
  span {
    font-size: 1rem;
    align-self: center;
  }
}
</style>
