<template>
  <div class="container-slim">
    <header class="persanel-info">
      <div class="persanel-avatar">
        <img :src="persanel.avatar" width="125" alt="avatar" />
      </div>
      <strong class="persanel-name"> {{ persanel.name }} </strong>
      <p class="persanel-about">{{ persanel.about }}</p>
      <SocialMediaLinks :links="socilaMediaLinks" />
    </header>
  </div>
</template>

<script>
import SocialMediaLinks from "./SocialMediaLinks";
export default {
  name: "",
  components: {
    SocialMediaLinks,
  },
  created() {
    this.$store.dispatch("getSocialMediaLinks");
  },
  computed: {
    socilaMediaLinks() {
      return this.$store.getters.socialMedia;
    },
  },
  props: {
    persanel: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
header.persanel-info {
  @include flex(center, center, column);
  margin-top: 24px;
  padding: 24px 18px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 4px 16px -8px var(--primary);
  .persanel {
    &-avatar {
      margin: 14px 0 0;
      img {
        border: 3.5px dashed var(--primary);
        border-radius: 50%;
      }
    }
    &-name {
      margin: 18px 0;
      font-size: 1.5rem;
      color: var(--primary);
      font-family: "Lobster Two";
    }
    &-about {
      margin-bottom: 18px;
      text-align: center;
      line-height: 150%;
      font-weight: 600;
      color: var(--dark);
    }
  }
}
</style>
