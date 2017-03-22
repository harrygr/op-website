<template>
  <div>
    <div class="Wallop relative mb2" ref="carousel">
      <div class="Wallop-list Wallop--fade">
        <figure class="Wallop-item">
          <img class="w-100 db" src="/static/carousel/op-carousel.jpg" alt="">
        </figure>
        <figure class="Wallop-item">
          <img class="w-100 db" src="/static/carousel/pstyle-carousel.jpg" alt="">
        </figure>
        <figure class="Wallop-item">
          <img class="w-100 db" src="/static/carousel/pstyle2-carousel.jpg" alt="">
        </figure>
        <figure class="Wallop-item">
          <img class="w-100 db" src="/static/carousel/samson-carousel.jpg" alt="">
        </figure>
      </div>
      <router-link to="/" class="dib w-60-ns mw-100 mw6-ns absolute absolute-center">
        <img src="/static/op-logo-vector-with-tagline-white.svg" alt="">
      </router-link>
    </div>

    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
      <div v-for="(tile, index) in tiles" :key="index" class="fl w-100 w-25-ns pa2 sans-serif">
        <router-link v-if="tile.link.slice(0,4) !== 'http'" :to="tile.link" class="db relative dim">
          <img :src="tile.image" alt="" class="db">
          <span class="absolute absolute-center db white ttu f4">{{ tile.text }}</span>
        </router-link>
        <a v-if="tile.link.slice(0,4) === 'http'" :href="tile.link" class="db relative dim" target="_blank">
          <img :src="tile.image" alt="" class="db">
          <span class="absolute absolute-center db white ttu f4">{{ tile.text }}</span>
        </a>
      </div>
      </div>
    </div>

    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <a
          v-for="(instagram, index) in $store.state.instagrams"
          :key="index" :href="instagram.link"
          class="db fl w-100 w-20-ns pa2 relative dim"
          target="_blank"
        >
          <img :src="instagram.images.standard_resolution.url" :alt="instagram.caption.text" class="db">
        </a>
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
          link: 'http://proudlockstyle.com',
          image: '/static/home/style.jpg',
        }, {
          text: 'Fitness',
          link: '/posts/fitness',
          image: '/static/home/fitness.jpg',
        }, {
          text: 'Serge',
          link: 'http://sergedenimes.com',
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
    if (!this.$store.state.instagrams.length) {
      this.$store.dispatch('getInstagrams')
    }
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
