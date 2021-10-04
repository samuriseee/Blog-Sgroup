<template>
  <div class="home">
    <!--main Section-->
    <section class="mainSec" id="home">
      <div class="content">
        <div class="textBox">
          <h1>
            Make better<br />
            coffee 
            <img src="../assets/Coffee/coffeeIcon.png"/>
          </h1>
          <p style="color:rgb(151, 144, 144); font-size:3rem;">
            why learn how to blog?
          </p>
        </div>
        <div class="imgBox">
          <img src="../assets/Coffee/coffee.gif" alt="">
        </div>
      </div>
    </section>

    <div class="sectionBlog">
      <div class="headerBlog" v-for="blog in homeHeaderPost" :key="blog.blogID"
          @click="$router.push('/blogs/' + blog.blogID)">
        <div class="headerBlogText" >
          <h2>{{ blog.blogTitle }}</h2>
          <span>Read more</span>
        </div>
        <div class="headerBlogImg">
          <img :src="blog.blogCoverPhoto" alt="" />
        </div>
      </div>

      <div class="gridBlog">
        <div class="gridItem" v-for="blog in homeGridPost" :key="blog.blogID"
          @click="$router.push('/blogs/' + blog.blogID)">
          <img :src="blog.blogCoverPhoto" alt="" />
          <div> 
            <h2>{{ blog.blogTitle }}</h2>
            <span>Read more</span>
          </div>
        </div>
      </div>

      <div class="footerBlog" v-for="blog in homeFooterPost" :key="blog.blogID"
          @click="$router.push('/blogs/' + blog.blogID)">
        <div class="footerBlogText">
          <h2>{{ blog.blogTitle }}</h2>
          <span>Read more</span>
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
    return {
      blogs: [
        {
          createdAt: "2021-07-25T08",
          author: "Kristina Koepp",
          avatar: "https://cdn.fakercloud.com/avatars/iqonicd_128.jpg",
          thumbnail:
            "https://www.nordicrose.net/content/images/2020/03/modern-remote-working-tools.gif",
          title: "Cum quaerat aut laboriosam assumenda.",
          content:
            "Ullam qui qui et quo voluptas nostrum consequatur dolor qui. Eveniet maxime porro aut et nihil debitis qui non...",
          id: "10",
        },
        {
          createdAt: "2021-07-25T00",
          author: "Norman Jerde I",
          avatar: "https://cdn.fakercloud.com/avatars/fiterik_128.jpg",
          thumbnail:
            "https://www.nordicrose.net/content/images/2020/03/remote-work-distributed-teams-sources.gif",
          title: "Ipsum natus asperiores sit odio.",
          content:
            "Repellendus omnis aut consectetur molestiae deleniti minus rem. Laboriosam sed...",
          id: "11",
        },
        {
          createdAt: "2021-07-25T07",
          author: "Tyrone Hoeger Jr.",
          avatar: "https://cdn.fakercloud.com/avatars/russell_baylis_128.jpg",
          thumbnail:
            "https://www.nordicrose.net/content/images/2020/03/hello2.gif",
          title: "Voluptatibus consequatur dolor harum qui.",
          content:
            "Repellendus omnis aut consectetur molestiae deleniti minus rem. L quas.",
          id: "12",
        },
        {
          createdAt: "2021-06-05T16",
          author: "Ms. Sidney Gottlieb",
          avatar: "https://cdn.fakercloud.com/avatars/wikiziner_128.jpg",
          thumbnail:
            "https://www.nordicrose.net/content/images/2020/03/ghost-figma-publishing-cms-design.gif",
          title: "Eos minima est dorel la.",
          content:
            "Repellendus omnis aut consectetur molestiae deleniti minus rem. Laboriosam sed sit.",
          id: "13",
        },
        {
          createdAt: "2020-10-07T05",
          author: "Lowell Little",
          avatar: "https://cdn.fakercloud.com/avatars/aluisio_azevedo_128.jpg",
          thumbnail:
            "https://www.nordicrose.net/content/images/2020/03/offf-barcelona.jpg",
          title:
            "Corrupti et ut aut laborum repellendus esse saepe corporis aut.",
          content:
            "A praesentium voluptas officia occaecati dolor itaque quam. Et minus odit nisi. Delectus eius explicabo aut quas atque.\n \rQuae asperiores ut velit. Nisi aspernatur dolorum nihil quia iure praesentium. Totam magni officiis tempore magni qui amet assumenda nostrum. ",
          id: "14",
        },
      ],
    };
  },
  computed: {
    homeHeaderPost() {
      return this.$store.getters.homeHeaderPost
    },
    homeGridPost() {
      return this.$store.getters.homeGridPost
    },
    homeFooterPost() {
      return this.$store.getters.homeFooterPost
    }
  }
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
  justify-content: center;
  align-items: center;
  text-align: left;
  @media (max-width:1000px) {
    flex-direction: column-reverse;
  }
}
.content .textBox {
  position: relative;
  max-width: 600px;
  /* top:200px; */
  z-index: 3;
}
.content .textBox h1 {
  color: rgb(0, 0, 0);
  font-size: 5em;
  line-height: 1.4em;
  font-family: 'Harriet Text', sans-serif;
  @media (max-width:1000px) {
    font-size: 4rem;
  }
}
.content .textBox p {
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  @media (max-width:1000px) {
    font-size: 1.2rem !important;
  }
}
.imgBox {
  img {
    @media (max-width:600px) {
      width:400px;
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
  h2 {
      font-family: 'Harriet Text', sans-serif;
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
    @media (max-width:1000px) {
        height: auto;
        flex-direction: column-reverse;
      }
  }
  .gridBlog {
    width: 95%;
    justify-content: center;
    align-items: center;
    display:flex;
    .gridItem {
      width: 100%;
      border: 1px solid #a4a3a5;
      border-radius: 10px;
      margin: 20px 0px;
      cursor: pointer;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      transition-duration: 0.3s;
      @media (max-width:1000px) {
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
        font-size:1.3rem;
      }
      p {
        height:120px;
      }
    }
    @media (max-width:1000px) {
        flex-direction: column-reverse;
      }
  }
  .footerBlog {
    width: 95%;
    height:700px;
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
    @media (max-width:1000px) {
        display:none;
      }
  }
}
.headerBlogText {
  padding: 40px;
  text-align: center;
  margin: 0 auto;
  h2 {
    padding: 20px 0px;
    
  }
  span {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    font-size: 1.2rem;
  }
  @media (max-width:1000px) {
    width:100%;
  }
}
.headerBlogImg img {
  width:100%;
  height: 300px;
  border-radius: 10px;
  @media (max-width:1000px) {
    margin-top:-50px;
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
  span {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 5px 20px;
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
    width:60%;
    padding: 20px;
    margin: 0 auto;
    h2,
    p {
      font-size:4rem;
      padding: 10px 20px;
    }
    span {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 5px 20px;
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
</style>
