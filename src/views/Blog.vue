<template>
  <main>
    <div class="container-slim">
      <h1 class="header">Blog Yazıları</h1>
    </div>
    <BlogList />
  </main>
</template>

<script>
import BlogList from "@/components/BlogList";
export default {
  name: "Blog",
  components: {
    BlogList,
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: var(--dark);
  margin: 24px 0;
  font-size: 1.75rem;
}
</style>
