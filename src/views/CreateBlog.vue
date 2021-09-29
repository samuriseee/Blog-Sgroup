<template>
  <div class="container">
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
      <router-link class="functionButton" to="/blog-preview"
        >Post Preview</router-link
      >
      <div class="upload-file">
        <label for="blog-photo" class="functionButton">Upload Cover Photo</label>
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
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor,
  },
  data: () => {
    return {
      editorOption: {
        debug: "default",
        placeholder: "Write your post here...",
        readOnly: true,
        theme: "snow",
      },
    };
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
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
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
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
}
.mainFunction {
  display:flex;
  align-items: center;
  margin-top:3rem;
    .functionButton {
      width: 200px;
      height:40px;
      padding: 10px;
      margin: 15px;
      border-radius: 10px;
      font-size:1rem;
      text-decoration: none;
      background: rgb(0, 0, 0);
      color:#fff;
      cursor:pointer;
    }
    span {
      font-size:1rem;
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
