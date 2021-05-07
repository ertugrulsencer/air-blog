<template>
  <div class="container-slim">
    <header class="persanel-info">
      <div class="persanel-avatar">
        <img :src="persanel.avatar" width="125" alt="avatar" />
      </div>
      <strong class="persanel-name"> {{ persanel.name }} </strong>
      <p class="persanel-about">{{ persanel.about }}</p>
    </header>
  </div>
</template>

<script>
export default {
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
  .persanel {
    &-avatar {
      margin: 24px 0 0;
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
