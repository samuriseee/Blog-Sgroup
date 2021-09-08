<template>
  <div class="aboutContent">
    <div class="section1">
      <div class="text">
        <h2>{{ content[0].title }}</h2>
        <p>{{ content[0].content }}</p>
      </div>
      <img :src="content[0].image" alt="" />
    </div>

    <div class="section2">
      <img :src="content[2].image" alt="" />
      <div class="text">
        <h2>{{ content[2].title }}</h2>
        <p>{{ content[2].content }}</p>
      </div>
    </div>

    <div class="section3">
      <div class="text">
        <h2>{{ content[3].title }}</h2>
        <p>{{ content[3].content }}</p>
      </div>
      <div class="gallery">
        <img :src="content[3].image" alt="" />
        <img :src="content[3].image1" alt="" />
        <img :src="content[3].image2" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          id: "0",
          title: "Lorem Ipsum",
          image:
            "https://media.giphy.com/media/h2OEMQxsQ2I8Zz8tP5/giphy.gif",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "1",
          title: "",
          image:
            "https://media.giphy.com/media/LOF4oIgHuRCaAI8kSW/giphy.gif",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "2",
          title: "Lorem Ipsum",
          image:
            "https://media.giphy.com/media/LOF4oIgHuRCaAI8kSW/giphy.gif",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "3",
          title: "Lorem Ipsum",
          image: "https://media.giphy.com/media/gghYespvi7bBL6hsab/giphy.gif",
          image1: "https://media.giphy.com/media/YewmDPD4ymnaQTkEFM/giphy.gif",
          image2: "https://media.giphy.com/media/H3N6RzQQhjii7wlfIW/giphy.gif",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$white: #fffefe;
$black: #000000;
$yellow:#FFD900;
.aboutContent {
  width: 90%;
  background-color: $black;
  margin: auto;
  padding: 30px 0;
  color: $white;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.4;
  position: relative;
  z-index: -10;
}
.aboutContent::before {
  content: "";
  position: absolute;
  background-color: $yellow;
  bottom: 0;
  left: 10%;
  width: 10px;
  height: 65%;
  z-index: -1;
}
.aboutContent::after {
  content: "";
  position: absolute;
  background-color: $yellow;
  top: 0;
  right: 15%;
  width: 10px;
  height: 65%;
  z-index: -1;
}
.text {
  padding: 0px 10px;
}
.text h2 {
  font-size: 2.5rem;
}
.aboutContent img {
  width: 40%;
  
}
.section1 {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    display:none;
  }
}
.section1 .text p {
  font-size: 1.5rem;
  width: 100%;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    font-size:1rem;
  }
}
.section2 {
  position: relative;
  top: -50px;
  text-align: center;
  img {
    @media only screen and (min-width: 300px) and (max-width: 780px) {
    width:100%;
  }
  }
}
.section2 .text p {
  font-size: 1.5rem;
  width: 50%;
  margin: 0 auto;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    font-size:1rem;
  }
}
.section3 {
  width: 80%;
  position: relative;
  left: 15%;
}
.section3 .text p {
  font-size: 1.5rem;
  width: 100%;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    font-size:1rem;
  }
}
.section3 .gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (min-width: 300px) and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
}
.section3 .gallery img {
  width:100%;
  height:400px;
  object-fit: cover;
  padding: 10px;
}
</style>