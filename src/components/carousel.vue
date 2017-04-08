<template>
  <div ref="container" class="main-carousel">
    <div class="carousel-cell pa2" v-for="image in images">
      <img :src="image" alt="yeye">
    </div>
  </div>
</template>

<script>
  import Flickity from 'flickity-imagesloaded'

  export default {
    props: ['images'],
    data () {
      return {
        carousel: null,
      }
    },
    updated () {
      this.initCarousel()
    },

    mounted () {
      this.initCarousel()
    },

    methods: {
      initCarousel () {
        this.carousel = new Flickity(this.$refs.container, {
          imagesLoaded: true,
          percentPosition: false,
          initialIndex: 4,
          autoPlay: 3000,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true,
        })
      },
    },
  }
</script>

<style>
  .carousel-cell {
    width: 16.67%;
  }
  .carousel-cell img {
    display: block;
  }
</style>
