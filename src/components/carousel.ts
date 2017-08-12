
import Vue, { ComponentOptions } from 'vue'
import Flickity from 'flickity'
import 'flickity-imagesloaded'

const template = `<div ref="carousel" :class="'carousel ' + className">
    <div v-for="(image, index) in images" :key="index" :class="'carousel-cell dib ' + childClassName">
    <img :data-flickity-lazyload="image" :src="image" class="w-100 db" />
    </div>
  </div>`

interface Props extends Vue {
  images: string[]
  className?: string
  childClassName?: string
  options?: FlickityOptions
  initCarousel: () => void
}

export default {
  props: {
    images: { type: Array, default: () => [] },
    className: { type: String, default: () => '' },
    childClassName: { type: String, default: () => '' },
    options: { type: Object, default: () => ({}) },
  },
  template,
  mounted() {
    this.initCarousel()
  },
  methods: {
    initCarousel() {
      const options: FlickityOptions = {
        contain: true,
        initialIndex: 0,
        accessibility: true,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        cellSelector: '.carousel-cell',
        ...this.options,
      }
      new Flickity(this.$refs.carousel as Element, options)
    }
  }
} as ComponentOptions<Props>