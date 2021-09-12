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
      <div class="headerBlog" @click="$router.push('/blogs/' + 10)">
        <div class="headerBlogText" >
          <h2>{{ blogs[0].title }}</h2>
          <p>{{ blogs[0].content }}</p>
          <span>Read more</span>
        </div>
        <div class="headerBlogImg">
          <img :src="blogs[0].thumbnail" alt="" />
        </div>
      </div>

      <div class="gridBlog">
        <div class="gridItem" @click="$router.push('/blogs/' + 11)">
          <img :src="blogs[1].thumbnail" alt="" />
          <h2>{{ blogs[1].title }}</h2>
          <p>{{ blogs[1].content }}</p>
          <span>Read more</span>
        </div>
        <div class="gridItem" @click="$router.push('/blogs/' + 12)">
          <img :src="blogs[2].thumbnail" alt="" />
          <h2>{{ blogs[2].title }}</h2>
          <p>{{ blogs[2].content }}</p>
          <span>Read more</span>
        </div>
        <div class="gridItem" @click="$router.push('/blogs/' + 13)">
          <img :src="blogs[3].thumbnail" alt="" />
          <h2>{{ blogs[3].title }}</h2>
          <p>{{ blogs[3].content }}</p>
          <span>Read more</span>
        </div>
      </div>

      <div class="footerBlog" @click="$router.push('/blogs/' + 14)">
        <div class="footerBlogText">
          <h2>{{ blogs[4].title }}</h2>
          <p>{{ blogs[4].content }}</p>
          <span>Read more</span>
        </div>
        <div class="footerBlogImg">
          <img :src="blogs[4].thumbnail" alt="" />
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
            "Repellendus omnis aut consectetur molestiae deleniti minus rem. Laboriosam sed sit itaque tempora dolorum cum ipsum quas. Delectus eius explicabo aut quas atque...",
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
            "Repellendus omnis aut consectetur molestiae deleniti minus rem. Laboriosam sed sit itaque tempora dolorum cum ipsum quas.",
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
  padding: 0px 100px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: left;
  
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
}
.content .textBox p {
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
}
.content .textBox .btn {
  margin-top: 2rem;
  display: flex;
}
.sectionBlog {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

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
      }
      p {
        height:120px;
      }
    }
  }
  .footerBlog {
    width: 95%;
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
  }
}
.headerBlogText {
  padding: 40px;
  text-align: justify;
  h2 {
    padding: 20px 0px;
  }
  span {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    font-size: 1.2rem;
  }
}
.headerBlogImg img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
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
  img {
    width: 100%;
    height: 700px;
    border-radius: 10px;
  }
  .footerBlogText {
    width:60%;
    padding: 20px;
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
