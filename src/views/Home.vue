<template>
  <main>
    <div class="container">
      <h1>Son Makaleler</h1>
      <section class="articles">
        <article v-for="(article, index) in articleList" :key="index">
          <header class="article-header">
            {{ article.header }}
          </header>
          <p class="article-description">
            {{ article.description }}
          </p>
          <router-link :to="`/post/${article.key}`" class="btn-next">
            Devamını Oku
          </router-link>
        </article>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      articleList: [
        {
          key: "-jiuy9Yh98hg7tyG",
          header: "C Sharp Console Uygulaması",
          description:
            "C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil.. C Sharp Console Uygulaması Lorem ipsum dolar sit amet ile Visual Studio kullanarak bir uygulama oluşturmamız gerekmektedir. Ama Visual Studio ve C Sharp hiç güzel bir dil değil..",
        },
        {
          key: "-jiuy9Yh98hg7tyG",
          header: "Php Oturum Kontrol Uygulaması",
          description:
            "Php ile Lorem ipsum dolar sit amet PhpStorm kullanarak bir proje oluşturmamız gerekmektedir. Daha sonra php taglarını açarak kodlamaya başlayalım. Php ile Lorem ipsum dolar sit amet PhpStorm kullanarak bir proje oluşturmamız gerekmektedir. Daha sonra php taglarını açarak kodlamaya başlayalım. ",
        },
      ],
    };
  },
  metaInfo: {
    title: "Ana Sayfa",
  },
};
</script>

<style lang="scss" scoped></style>
