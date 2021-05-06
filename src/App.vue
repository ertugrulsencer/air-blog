<template>
  <div class="wrapper">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
export default {
  name: "App",
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
  metaInfo: {
    titleTemplate: "%s | Air Blog",
    htmlAttrs: {
      lang: "tr",
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
