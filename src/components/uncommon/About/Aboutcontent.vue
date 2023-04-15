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
            "https://www.udiscovermusic.com/wp-content/uploads/2020/10/Bill-Evans-GettyImages-84893775-1000x600.jpg",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "1",
          title: "",
          image:
            "https://www.udiscovermusic.com/wp-content/uploads/2020/02/Bill-Evans-GettyImages-84843305.jpg",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "2",
          title: "Lorem Ipsum",
          image:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/181C7/production/_86695789_davis1_ap.jpg",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          id: "3",
          title: "Lorem Ipsum",
          image: "https://cdn.britannica.com/62/194462-131-40622170/Sarah-Vaughan-American-pianist-1946.jpg",
          image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjRDX_uy0KC-D5NS14CmfqBxvN5yec75TFqkYRFXhxefuktUnEs4AwisPI211gfS-3sY&usqp=CAU",
          image2: "https://www.jazzradio.fr/media/news/thumb/1110x624_501188815.webp",
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