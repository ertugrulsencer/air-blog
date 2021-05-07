<template>
  <main>
    <PersonalInfo :persanel="personalInfo" />
    <div class="container-slim">
      <h1 class="header-text">Son Makaleler</h1>
    </div>
    <BlogList :isRecently="true" />
  </main>
</template>

<script>
import BlogList from "@/components/BlogList";
import PersonalInfo from "@/components/PersonalInfo";
export default {
  name: "Home",
  components: {
    BlogList,
    PersonalInfo,
  },
  computed: {
    personalInfo() {
      return this.$store.getters.personalInfo;
    },
  },
  metaInfo: {
    title: "Ana Sayfa",
  },
  created() {
    this.$store.dispatch("getInfo");
  },
};
</script>

<style lang="scss" scoped>
.header-text {
  margin-top: 24px;
  font-size: 1.75rem;
  color: var(--dark);
}
</style>
