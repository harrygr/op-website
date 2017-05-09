import Flickity from 'flickity-imagesloaded'

import template from './carousel.template.html'
import './carousel.css'

export default {
  template,
  props: ['images'],
  data() {
    return {
      carousel: null,
    }
  },
  updated() {
    this.initCarousel()
  },

  mounted() {
    this.initCarousel()
  },

  methods: {
    initCarousel() {
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
