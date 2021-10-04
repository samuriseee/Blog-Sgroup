<template>
  <div class="container">
    <div class="title">
      <h2>{{ blogDetail.blogTitle }}</h2>
    </div>
    <!-- full width image  -->
    <figure class="full-width">
      <img :src="blogDetail.blogCoverPhoto" />
    </figure>
    <!-- below image  -->
    <div class="content">
      <!-- author information -->
      <div class="author">
        <div class="text">
          <div>
            <p>{{ blogDetail.author }}</p>
          </div>
        </div>
        <div class="socialButton">
          <div><i class="fab fa-facebook"></i></div>
          <div><i class="fab fa-twitter"></i></div>
        </div>
      </div>
      <!-- main content  -->
      <main>
        <p v-html="blogDetail.blogContent"> </p>
      </main>
      <postBottom />
      <!-- furtherReading -->
      <div class="wrapper">
        <div
          v-for="blog in paginatedItems"
          :key="'blog-' + blog.id"
          @click="$router.push('/blogs/' + blog.id)"
        >
          <article>
            <img :src="blog.thumbnail" />
            <p>{{ blog.title }}</p>
          </article>
        </div>
      </div>
      <b-row>
        <b-col class="mt-3">
          <b-pagination
            @change="onPageChanged"
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
import postBottom from "../components/uncommon/BlogsDetails/postBottom.vue";
export default {
  components: {
    postBottom,
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    totalRows() {
      return this.$store.state.blogPosts.length;
    },
  },
  data() {
    return {
      paginatedItems: this.$store.state.blogPosts,
      currentPage: 1,
      perPage: 5,
      blogDetail: "",
    };
  },
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.$store.state.blogPosts;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
    getBlogDetail() {
      this.blogPosts.forEach((item) => {
        if (item.blogID == this.$route.params.id) {
          this.blogDetail = item;
          console.log(this.blogDetail);
        }
      });
    },
  },
  created() {
    this.getBlogDetail();
    this.paginate(this.perPage, 0);
  },
};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
.container {
  margin-top: 8rem;
  h1 {
    padding: 16px;
    margin: 0 auto;
    width: 80%;
    font-size: 3rem;
    font-weight: bold;
    @media only screen and (min-width: 300px) and (max-width: 780px) {
      font-size: 2rem;
      width: 100%;
    }
  }
}
.full-width {
  width: 99.5vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  img {
    width: 100%;
    object-fit: cover;
  }
}
figure {
  margin: 30px 0;
}
.author {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 2px solid $black;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    flex-direction: column;
  }
  .text {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    div {
      text-align: left;
      padding: 0px 10px;
      p {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0px;
      }
    }
  }
  .socialButton {
    display: flex;
    align-items: center;
    @media only screen and (min-width: 300px) and (max-width: 780px) {
      padding-top: 20px;
      margin: 0 auto;
    }
    div {
      width: 80px;
      height: 50px;
      font-size: 20px;
      border: 1px solid #eaeaea;
      box-shadow: 0 1px 4px rgb(0 0 0 / 8%);
      border-radius: 4px;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:nth-child(1):hover {
        background: #4267b2;
        color: $white;
      }
      &:nth-child(2):hover {
        background: #00acee;
        color: $white;
      }
      @media only screen and (min-width: 300px) and (max-width: 780px) {
        width: 140px;
      }
    }
  }
}

.container .content main {
  text-align: justify;
  img {
    width: 90%;
    display: flex;
    object-fit: cover;
    margin: 0 auto;
  }
  p {
    font-size: 1.3rem;
    font-weight: 300;
    padding: 30px 0px;
    width: 80%;
    margin: 0 auto;
    @media only screen and (min-width: 300px) and (max-width: 780px) {
      font-size: 1rem;
    }
  }
}
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (min-width: 300px) and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 576px) and (max-width: 1029px) {
    grid-template-columns: 1fr 1fr;
  }
  article {
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.5s;
    &:hover {
      transform: scale(1.06);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      color: green;
    }
    img {
      width: 90%;
      height: 240px;
      margin: 70px 0px 10px 0px;
    }
    p {
      font-weight: 650px;
      width: 80%;
      margin: 0 auto;
      padding: 10px;
    }
  }
}
.b-pagination-pills {
  padding: 20px;
}
</style>
