<template>
  <div class="container">
    <h1>
      A few words about this blog platform. Ghost, and how this site was made
    </h1>
    <span style="font-size: 1.3rem"
      >Why Ghost ($ Figma) instead of Medium, WordPress or other options?</span
    >
    <!-- full width image  -->
    <figure class="full-width">
      <img :src="blogs[$route.params.id].thumbnail" />
    </figure>
    <!-- below image  -->
    <div class="content">
      <!-- author information -->
      <div class="author">
        <div class="text">
          <img :src="blogs[$route.params.id].avatar" alt="" />
          <div>
            <p>{{ blogs[$route.params.id].author }}</p>
            <span style="opacity: 0.8"
              >{{ blogs[$route.params.id].createdAt }}.4 min read</span
            >
          </div>
        </div>
        <div class="socialButton">
          <div><i class="fab fa-facebook"></i></div>
          <div><i class="fab fa-twitter"></i></div>
        </div>
      </div>
      <!-- main content  -->
      <main>
        <p>{{ blogs[$route.params.id].content }}</p>
        <p
          style="font-size: 2rem; padding: 40px 0px 20px 0px; font-weight: 700"
        >
          Next on the pipeline
        </p>
        <p>{{ blogs[$route.params.id].content }}</p>
        <img src="https://www.linkpicture.com/q/angle.jpg" alt="" />
        <p>{{ blogs[$route.params.id].content }}</p>
        <p>{{ blogs[$route.params.id].content }}</p>
      </main>
      <postBottom />
      <!-- furtherReading -->
      <div class="wrapper">
        <div
          v-for="blog in blogs"
          :key="'blog-' + blog.id"
          @click="$router.push('/blogs/' + blog.id)"
        >
          <article>
            <img :src="blog.thumbnail" />
            <p>{{ blog.title }}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postBottom from "../components/uncommon/BlogsDetails/postBottom.vue";
export default {
  name: "Blogs",
  components: {
    postBottom,
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
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
</style>
