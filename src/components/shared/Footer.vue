<template>
  <footer class="footer">
    <div class="container">
      <p>&copy;2021 <strong>Air Blog</strong></p>
      <div class="social-media">
        <a href="https://instagram.com/" class="link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com/" class="link">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="https://youtube.com/" class="link">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
footer.footer {
  @include flex;
  margin-top: auto;
  background: #ffffff;
  height: 48px;
  border-top: 3px solid var(--primary);
  .container {
    @include flex(space-between);
    font-size: 0.9rem;
    p {
      font-weight: 500;
      color: var(--dark);
      strong {
        color: var(--primary);
      }
    }
    .social-media {
      @include flex(flex-end);
      .link {
        @include flex;
        background: var(--dark);
        border-radius: 4px;
        border: 2px solid var(--dark);
        color: var(--light);
        width: 26px;
        height: 26px;
        transition: all 300ms ease-in-out;
        &:not(:last-child) {
          margin-right: 14px;
        }
        &:hover {
          background: var(--primary);
        }
      }
    }
  }
}
</style>
