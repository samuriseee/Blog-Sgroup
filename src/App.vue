<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </transition>
  </div>
</template>

<script>
import defaultLayout from "./layout/default.vue";
import unauthLayout from "./layout/unauth.vue";
export default {
  components: {
    defaultLayout,
    unauthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout === "unauth"
        ? "unauthLayout"
        : "defaultLayout";
    },
  },
};
</script>
<style lang="scss">

#app {
  font-family: 'Harriet Text', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

