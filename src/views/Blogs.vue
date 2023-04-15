<template>
  <div class="container">
    <div
      v-for="blog in homeHeaderPost"
      :key="blog.blogID"
      @click="$router.push('/blogs/' + blog.blogID)"
      class="firstBlog"
    >
      <h1 class="newPostTitle">Newest Post</h1>
      <img :src="blog.blogCoverPhoto" class="mainPic" />
      <h1>
        {{ blog.blogTitle }}
      </h1>
    </div>
    <div class="blogs">
      <h3>All articles</h3>
      <div class="grid2">
        <div v-for="blog in blogPosts" :key="blog.blogID" id="blogContent">
          <div>
            <img
              :src="blog.blogCoverPhoto"
              @click="$router.push('/blogs/' + blog.blogID)"
            />
          </div>
          <div v-if="userRole == 'admin'" class="d-flex justify-content-around">
            <button
              type="button"
              :src="require('@/assets/pencil.png')"
              class="button-edit btn btn-warning"
              @click="editPost(blog)"
            >
              Edit
            </button>
            <button
              type="button"
              :src="require('@/assets/remove.png')"
              class="button-delete btn btn-danger"
              @click="deletePost(blog)"
            >
              Delete
            </button>
          </div>
          <p>{{ blog.blogTitle }}</p>
        </div>
      </div>
      <b-row>
        <b-col class="mt-3">
          <b-pagination
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            pills
            align="center"
            class="my-0"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  computed: {
    blogPosts() {
      const items = this.$store.state.blogPosts;
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.$store.state.blogPosts.length;
    },
    homeHeaderPost() {
      return this.$store.getters.homeHeaderPost;
    },
    userRole() {
      return this.$store.state.profileRole;
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6,
    };
  },
  methods: {
    deletePost(blog) {
      this.$store.dispatch("deletePost", blog.blogID);
    },
    editPost(blog) {
      console.log(blog);
      this.$router.push({ name: "editBlog", params: { id: blog.blogID } });
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;

.container {
  margin-top: 5rem;
  text-align: center;
  .blogs {
    width: 65%;
    margin: 50px auto;
    border-top: 2px solid $black;
    transition: 0.25s ease-out;
  }
  h1 {
    padding: 10px;
    margin: 0 auto;
    width: 80%;
    font-size: 2.3rem;
    font-weight: 700;
    @media only screen and (min-width: 300px) and (max-width: 780px) {
      font-size: 2rem;
      width: 100%;
    }
  }
  .mainPic {
    width: 80%;
  }
}
.blogs h3 {
  font-size: 2.5rem;
  font-weight: 700;
  transform: translate(0px, 50px);
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
  div {
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
    &:hover {
      transform: scale(1.03);
      transition: 0.2s ease-out;
      color: green;
    }
    p {
      width: 80%;
      margin: 0 auto;
      padding: 5px;
      font-size: 1.375rem;
      font-weight: 500;
    }
  }
}
#blogContent {
  img {
    width: 90%;
    height: 240px;
    margin: 70px 0px 10px 0px;
  }
}

#blogContent:hover .img-delete {
  display: inline-block;
  width: 20px !important;
  height: auto !important;
  position: absolute;
  right: 60px;
  top: 10px;
  transform: none !important;
  transition: none !important;
}

#blogContent:hover .img-edit {
  display: inline-block;
  width: 20px !important;
  height: auto !important;
  position: absolute;
  right: 90px;
  top: 10px;
}

#blogContent .img-delete {
  display: none;
}

#blogContent .img-edit {
  display: none;
}

.b-pagination-pills .page-item {
  .page-link {
    color: #000 !important;
    border-radius: 50rem !important;
    margin-left: 0.5rem;
    line-height: 1;
    font-size: 1.3rem !important;
    padding: 20px !important;
  }
}
.firstBlog {
  cursor: pointer;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.2s;
  margin: 120px 0px 5px;
  &:hover {
    transform: scale(1.015);
    transition: 0.2s ease-in;
    color: green;
  }
}
.newPostTitle {
  padding: 20px !important;
  font-size: 3rem !important;
  text-transform: uppercase;
  font-family: "Harriet Text", sans-serif;
}
</style>
