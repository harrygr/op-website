import Vue, { ComponentOptions } from 'vue'

import {Instagram, getInstagramPhotos} from '../services/instagram'
import Carousel from './carousel'

const template = `
  <op-carousel v-if="imageUrls.length" :images="imageUrls" child-class-name="w4-5 ph2" class-name="mb3 ph2" :options="{autoPlay: 3000}"></op-carousel>
`

interface Props extends Vue {
  user: string
  token: string
  images: Instagram.Media[]
  imageUrls: string[]
}

export default {
  props: {
    user: {type: String},
    token: {type: String}
  },
  data () {
    return {
      images: []
    }
  },
  computed: {
    imageUrls () {
      return this.images.map(i => i.images.standard_resolution.url)
    }
  },
  components: {
    'op-carousel': Carousel,
  },
  template,
  mounted() {
    getInstagramPhotos(this.user, this.token)
    .then(response => {
      response.fold(
        err => console.warn,
        media => {
          this.images = media
        }
      )
    })
  }
} as ComponentOptions<Props>