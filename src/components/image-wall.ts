import Vue, { ComponentOptions } from 'vue'
import * as Masonry from 'masonry-layout'
import * as imagesLoaded from 'imagesloaded'

const template = `
<div v-if="images.length" class="" ref="masonry">
  <div ref="sizer" class="w-third-ns w-50-m"></div>
  <a v-for="(image, index) in images" :class="containerClass(index) + ' pa2 db grid-item'" :href="image" target="_blank">
    <img :src="image" class="db"/>
  </a>
</div>
`

interface Props extends Vue {
  images: string[]
}

export default {
  props: {
    images: {type: Array},
  },
  data () {
    return {}
  },
  template,
  methods: {
    containerClass(index: number) {
      return index === 0 ? 'w-100' : 'w-third-ns w-50-m'
    }
  },
  mounted() {
    const elem = this.$refs.masonry as Element

    imagesLoaded(elem, () => {
      new Masonry(elem, {
        percentPosition: true,
        columnWidth: this.$refs.sizer,
        itemSelector: '.grid-item',
      })
    })

  }
} as ComponentOptions<Props>
