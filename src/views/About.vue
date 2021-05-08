<template>
  <main>
    <div class="container-slim">
      <h1 class="header">Hakkımda</h1>
      <div class="about-me">
        <p v-for="(aboutText, index) in about" :key="index">
          {{ aboutText }}
        </p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  metaInfo: {
    title: "Hakkımızda",
    meta: [
      {
        name: "description",
        vmid: "description",
        content: "Hakkımızda kısmı burası",
      },
      { name: "keywords", content: "Air blog, Blog, Kişisel Blog" },
    ],
  },
  created() {
    this.$store.dispatch("getAbout");
  },
  computed: {
    about() {
      return this.$store.getters.aboutMe;
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  font-family: "Lobster Two";
  margin: 24px 0;
  text-align: center;
  font-size: 1.75rem;
  color: var(--primary);
}
.about-me {
  padding: 24px 28px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 4px 18px -8px var(--primary);
  p {
    font-family: "Roboto";
    color: var(--dark);
    text-align: justify;
    line-height: 165%;
    text-indent: 14px;
    margin-bottom: 14px;
  }
}
</style>
