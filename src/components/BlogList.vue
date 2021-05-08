<template>
  <section class="articles">
    <div class="container-slim">
      <article
        class="article"
        v-for="(article, index) in articleList"
        :key="index"
      >
        <header class="article-header">
          <router-link class="article-header" :to="`/post/${article.key}`">
            {{ article.header }}
          </router-link>
        </header>
        <p class="article-description">
          {{ article.description }}
        </p>
        <router-link :to="`/post/${article.key}`" class="btn-next">
          Devam
          <i class="fas fa-arrow-right icon"></i>
        </router-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogList",
  props: {
    isRecently: {
      type: Boolean,
      defult: false,
    },
  },
  computed: {
    articleList() {
      if (this.isRecently) {
        return this.$store.getters.recentlyAddedBlog;
      } else {
        return this.$store.getters.blogList;
      }
    },
  },
  created() {
    this.$store.dispatch("getBlogList");
  },
};
</script>

<style lang="scss" scoped>
.articles {
  padding: calc(24px - 18px) 0;
}
.article {
  padding: 18px 14px;
  border-radius: 6px;
  background: #ffffff;
  border-bottom: 2px solid var(--gray);
  margin-bottom: 18px;
  .article-header {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 14px;
    font-family: "Lobster Two";
  }
  .article-description {
    line-height: 150%;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--dark);
    font-family: "Roboto";
  }
  .btn-next {
    display: inline-block;
    border: 2px solid var(--dark);
    padding: 8px 12px;
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--dark);
    border-radius: 4px;
    margin-top: 18px;
    text-transform: uppercase;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    .icon {
      margin-left: 6px;
      transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    &:hover {
      color: var(--primary);
      border-color: var(--primary);
      .icon {
        margin-left: 10px;
      }
    }
  }
}
</style>
