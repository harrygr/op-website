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
      <router-link to="/" class="dib w-60-ns mw-100 mw6-ns absolute absolute-center">
        <img src="/static/op-logo-vector-with-tagline-white.svg" alt="">
      </router-link>
    </div>

    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <router-link v-for="(tile, index) in tiles" :key="index" :to="tile.link" class="db fl w-100 w-25-ns pa2 relative">
          <img :src="tile.image" alt="">
          <span class="absolute absolute-center db white ttu f4">{{ tile.text }}</span>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import Wallop from 'wallop'

export default {
  name: 'home',
  data () {
    return {
      tiles: [
        {
          text: 'Style',
          link: '/style',
          image: '/static/home/style.jpg',
        }, {
          text: 'Fitness',
          link: '/posts/fitness',
          image: '/static/home/fitness.jpg',
        }, {
          text: 'Serge',
          link: '/serge',
          image: '/static/home/serge.jpg',
        }, {
          text: 'Travel',
          link: '/posts/travel',
          image: '/static/home/travel.jpg',
        },
      ],
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
      this.$store.commit('setNavInverted', window.pageYOffset > 50)
    },
  },
}
</script>

<style scoped>
  .Wallop-list img {
    filter: brightness(70%);
  }
  .absolute-center {
    top: 50%;
    left: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
  }
</style>
<style src="../../node_modules/wallop/css/wallop.css"></style>
<style src="../../node_modules/wallop/css/wallop--fade.css"></style>
