import Vue, { ComponentOptions } from 'vue'
import {Instagram, getInstagramPhotos} from '../services/instagram'

const template = `
<div v-if="images.length"  class="cf" >
<div class="flex">
    <a
      v-for="(image, key) in images"
      :key="key"
      class="db cover bg-center dim"
      :href="image.link"
      target="_blank"
      :style="{backgroundImage: 'url(' + image.images.standard_resolution.url + ')'}"
  >
    <img src="/media/square.png" alt="image.caption" class="w-100 h-auth overflow-hidden" />
  </a>
</div>
</div>
`

interface Props extends Vue {
  user: string
  token: string
  images: Instagram.Media[]
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