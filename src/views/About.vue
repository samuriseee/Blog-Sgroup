<template>
  <div class="about">
    <div class="introduction">
      <span class="logo" @click="$router.push('/blogs')">nordic rose</span>
      <h2>This is a page</h2>
    </div>
    <Aboutcontent />
    <Slogan />
  </div>
</template>

<script>

import Aboutcontent from "../components/uncommon/About/Aboutcontent.vue";
import Slogan from "../components/uncommon/About/Slogan.vue";
export default {
  components: {
    Aboutcontent,
    Slogan,

  },
};
</script>

<style scoped>
.body {
  padding: 0;
  margin: 0;
}
.introduction {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  font-weight: 500;
  font-size: 3rem;
  padding: 5px 12px;
  text-transform: uppercase;
  font-family: "Imperator", sans-serif;
  cursor: pointer;
}
</style>

