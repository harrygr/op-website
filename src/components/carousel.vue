<template>
  <div ref="container" class="main-carousel">
    <div class="carousel-cell pa2 w-33 w-20-m" v-for="image in images">
      <a :href="image.link" target="_blank" class="db saturate-hover grayscale">
        <img :src="image.image" :alt="image.caption">
      </a>
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
  @media screen and (min-width: 60em) {
    .carousel-cell {
      width: 16.67%;
    }
  }
  .carousel-cell img {
    display: block;
  }
</style>
