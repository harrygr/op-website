<template>
  <div>
    <div class="Wallop relative" ref="carousel">
      <div class="Wallop-list Wallop--fade">
        <figure class="Wallop-item">
          <img class="w-100" src="/static/carousel/op-carousel.jpg" alt="">
        </figure>
        <figure class="Wallop-item">
          <img class="w-100" src="/static/carousel/pstyle-carousel.jpg" alt="">
        </figure>
      </div>
      <router-link to="/" class="dib w-60-ns mw-100 mw6-ns absolute carousel-logo">
        <img src="/static/op-logo-vector-with-tagline-white.svg" alt="">
      </router-link>
    </div>

    This is the home page
  </div>
</template>

<script>
import Wallop from 'wallop'

export default {
  name: 'home',
  data () {
    return {
    }
  },

  mounted () {
    this.initCarousel()
    this.initNav()
  },

  destroyed () {
    this.uninitNav()
  },

  methods: {
    initCarousel () {
      const carousel = new Wallop(this.$refs.carousel)
      setInterval(() => {
        carousel.next()
      }, 7000)
    },

    initNav () {
      this.handleNav()
      window.addEventListener('scroll', this.handleNav)
    },

    uninitNav () {
      this.$store.commit('setNavInverted', true)
      window.removeEventListener('scroll', this.handleNav)
    },

    handleNav () {
      this.$store.commit('setNavInverted', window.pageYOffset > 300)
    },
  },
}
</script>

<style scoped>
  .Wallop-list img {
    filter: brightness(70%);
  }
  .carousel-logo {
    top: 50%;
    left: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
  }
</style>
<style src="../../node_modules/wallop/css/wallop.css"></style>
<style src="../../node_modules/wallop/css/wallop--fade.css"></style>
