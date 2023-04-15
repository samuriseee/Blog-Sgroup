<template>
  <div class="home">
    <!--main Section-->
    <section class="mainSec" id="home">
      <div class="content">
        <div class="textBox">
          <h1>
            JAZZ IS<br />
            EVERYWHERE
            <img src="" />
          </h1>
          <p style="color: rgb(151, 144, 144); font-size: 1.5rem">
            "I don't believe that jazz will ever really die.
            <br />
            It's a nice way to express yourself." <br />
            — Chet Baker
          </p>
        </div>
        <div class="imgBox">
          <img src="../assets/background.png" alt="" />
        </div>
      </div>
    </section>

    <div class="sectionBlog">
      <div
        class="headerBlog"
        v-for="blog in homeHeaderPost"
        :key="blog.blogID"
        @click="$router.push('/blogs/' + blog.blogID)"
      >
        <div class="headerBlogText">
          <h2>{{ blog.blogTitle }}</h2>
          <p>
            {{ extractContent(blog.blogContent, 250) }}
          </p>
          <span class="readMore">Read more</span>
        </div>
        <div class="headerBlogImg">
          <img :src="blog.blogCoverPhoto" alt="" />
        </div>
      </div>

      <div class="gridBlog">
        <div
          class="gridItem"
          v-for="blog in homeGridPost"
          :key="blog.blogID"
          @click="$router.push('/blogs/' + blog.blogID)"
        >
          <img :src="blog.blogCoverPhoto" alt="" />
          <div>
            <h2>{{ blog.blogTitle }}</h2>
            <p>
              {{ extractContent(blog.blogContent, 150) }}
            </p>
            <span class="readMore">Read more</span>
          </div>
        </div>
      </div>

      <div
        class="footerBlog"
        v-for="blog in homeFooterPost"
        :key="blog.blogID"
        @click="$router.push('/blogs/' + blog.blogID)"
      >
        <div class="footerBlogText">
          <h2>{{ blog.blogTitle }}</h2>
          <p>
              {{ extractContent(blog.blogContent, 500) }}
            </p>
          <span class="readMore">Read more</span>
        </div>
        <div class="footerBlogImg">
          <img :src="blog.blogCoverPhoto" alt="" />
        </div>
      </div>
      <div class="toBlogs">
        <button>
          <router-link to="/blogs">
            See More <b-icon icon="arrow-down-circle-fill"></b-icon
          ></router-link>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    homeHeaderPost() {
      return this.$store.getters.homeHeaderPost;
    },
    homeGridPost() {
      return this.$store.getters.homeGridPost;
    },
    homeFooterPost() {
      return this.$store.getters.homeFooterPost;
    },
  },
  methods: {
    extractContent(content, n) {
      return content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, n);
    },
  },
};
</script>
<style lang="scss" scoped>
.mainSec {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: rgb(253, 253, 253);
}
.content {
  position: relative;
  width: 100%;
  display: flex;
  padding: 100px 100px;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  text-align: left;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
}
.content .textBox {
  position: relative;
  max-width: 600px;
  z-index: 3;
}
.content .textBox h1 {
  display: flex;
  color: rgb(0, 0, 0);
  font-size: 5em;
  line-height: 1.4em;
  font-family: "Harriet Text", sans-serif;
  @media (max-width: 1000px) {
    font-size: 4rem;
  }
}
.content .textBox p {
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  @media (max-width: 1000px) {
    font-size: 1.2rem !important;
  }
}
.imgBox {
  img {
    @media (max-width: 600px) {
      width: 400px;
    }
  }
}
.sectionBlog {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    object-fit: cover;
  }
  h2 {
    font-family: "Harriet Text", sans-serif;
  }
  .headerBlog {
    width: 95%;
    height: 300px;
    border: 1px solid #a4a3a5;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
    &:hover {
      transform: scale(1.03);
      transition: 0.3s ease-out;
      color: green;
    }
    @media (max-width: 1000px) {
      height: auto;
      flex-direction: column-reverse;
    }
  }
  .gridBlog {
    width: 95%;
    justify-content: center;
    align-items: center;
    display: flex;
    .gridItem {
      width: 100%;
      border: 1px solid #a4a3a5;
      border-radius: 10px;
      margin: 20px 0px;
      cursor: pointer;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      transition-duration: 0.3s;
      @media (max-width: 1000px) {
        flex-direction: column-reverse;
      }
      &:hover {
        transform: scale(1.03);
        transition: 0.3s ease-out;
        color: green;
      }
      &:nth-child(2) {
        margin: 0 20px;
      }
      h2 {
        height: 100px;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
      }
      p {
        height: 120px;
      }
    }
    @media (max-width: 1000px) {
      flex-direction: column-reverse;
    }
  }
  .footerBlog {
    width: 95%;
    height: 700px;
    border: 1px solid #a4a3a5;
    border-radius: 10px;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
    &:hover {
      transform: scale(1.02);
      transition: 0.3s ease-out;
      color: green;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
}
.headerBlogText {
  position: relative;
  padding: 40px;
  text-align: center;
  margin: 0 auto;
  width: 70%;
  h2 {
    padding: 20px 0px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
}
.headerBlogImg img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  @media (max-width: 1000px) {
    margin-top: -50px;
  }
}
.gridItem {
  text-align: left;
  img {
    width: 100%;
    height: 250px;
    border-radius: 10px;
  }
  h2,
  p {
    padding: 10px 20px;
  }
}
.footerBlog {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  flex-direction: row-reverse;
  img {
    width: 100%;
    height: 700px;
    border-radius: 10px;
  }
  .footerBlogText {
    width: 60%;
    padding: 20px;
    margin: 0 auto;
    h2{
      font-size: 4rem;
      padding: 10px 20px;
    }
    p {
      padding: 10px 20px;
    }

  }
}
.toBlogs {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    text-decoration: none;
    background: #000000;
    color: #fff;
    border-radius: 40px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px;
    margin: 10px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
.imgBox {
  img {
    width: 500px;
    height: 500px;
    filter: invert(0.9);
  }
}
.readMore {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1rem;
  font-weight: 600;
  padding: 5px;
}
</style>
