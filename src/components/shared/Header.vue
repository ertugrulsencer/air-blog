<template>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="logo">Air Blog</router-link>
      <Nav />
    </div>
  </header>
</template>

<script>
import Nav from "./Nav";
export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
header.header {
  @include flex;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 62px;
  background: #ffffff;
  box-shadow: 0 2px 18px -4px var(--gray);
  .container {
    @include flex(space-between);
    .logo {
      color: var(--primary);
      font-size: 1.65rem;
      font-weight: 700;
      font-family: "Lobster Two";
    }
  }
}
</style>
