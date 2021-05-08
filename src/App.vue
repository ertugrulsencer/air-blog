<template>
  <div class="wrapper">
    <AppHeader />
    <transition name="fade-translate" mode="out-in">
      <router-view />
    </transition>
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

<style lang="scss"></style>
