<template>
  <div class="container">
    <!-- <div @click="$router.push('/blogs/' + 0)" class="firstBlog">
      <img :src="blogs[0].thumbnail" class="mainPic" />
      <h1>
        {{ blogs[0].title }}
      </h1>
      <p style="font-size: 1.4rem;width:60%;margin:0 auto;">
        {{ blogs[0].content }}
      </p>
    </div> -->
    <div class="blogs">
      <h3>All articles</h3>

      <div class="grid2">
        <div
          v-for="blog in blogPosts"
          :key="blog.blogID"
          class="blogContent"
          @click="$router.push('/blogs/' + blog.blogID)"
        >
          <img :src="blog.blogCoverPhoto" />
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
  },
  data() {
    return {
      currentPage: 1,
      perPage: 8,
    };
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
  }
  h1 {
    padding: 10px;
    margin: 0 auto;
    width: 80%;
    font-size: 3rem;
    font-weight: 700;
    @media only screen and (min-width: 300px) and (max-width: 780px) {
      font-size: 2rem;
      width: 100%;
    }
  }
  .mainPic {
    width: 80%;
    margin: 70px 0px;
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
      transform: scale(1.06);
      transition: 0.3s ease-out;
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
.blogContent {
  img {
    width: 90%;
    height: 240px;
    margin: 70px 0px 10px 0px;
  }
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
  &:hover {
    transform: scale(1.015);
    transition: 0.2s ease-in;
    color: green;
  }
}
</style>
