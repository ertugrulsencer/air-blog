<template>
  <nav class="navigation">
    <ul>
      <li>
        <router-link exact-active-class="active" :to="{ name: 'Home' }"
          >Ana Sayfa</router-link
        >
      </li>
      <li>
        <router-link exact-active-class="active" :to="{ name: 'Blog' }"
          >Blog</router-link
        >
      </li>
      <li>
        <router-link exact-active-class="active" :to="{ name: 'About' }"
          >Hakkımızda</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
nav.navigation {
  @include flex(flex-end, center);
  ul {
    @include flex(flex-end, center);
    list-style: none;
    li {
      &:not(:last-child) a {
        margin-right: 12px;
      }
      a {
        padding: 8px;
        font-size: 0.9rem;
        text-transform: uppercase;
        color: var(--dark);
        font-weight: 700;
        transition: all 300ms ease-in-out;
        &:hover,
        &.active {
          color: var(--primary);
        }
      }
    }
  }
}
</style>
