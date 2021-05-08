<template>
  <ul class="social-media-links">
    <li v-for="(link, index) in links" :key="index">
      <a target="_blank" class="link" :href="link.url">
        <i class="icon" :class="link.icon"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.social-media-links {
  list-style: none;
  @include flex(space-between);
  flex-wrap: wrap;
  // margin: 0 -18px;
  .link {
    @include flex;
    margin: 0 18px;
    padding: 4px;
    width: 32px;
    height: 32px;
    background: var(--dark);
    border-radius: 4px;
    color: var(--light);
    border: 2px solid var(--dark);
    font-size: 0.9rem;
    transition: all 300ms ease-in-out;
    &:hover {
      // color: var(--primary);
      background: var(--primary);
    }
  }
}
</style>
