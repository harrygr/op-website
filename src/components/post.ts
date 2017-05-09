import Vue, { ComponentOptions } from 'vue'

import {Post} from '../content'
import template from './post.template.html'
import './post.css'

interface PostComponent extends Vue {
  post: Post
  excerpt: boolean
}

export default {
  template,
  props: {
    excerpt: {
      type: Boolean,
      default: false,
    },
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    category () {
      const categories = Object.keys(this.post.categories)
      return categories.length ? this.post.categories[categories[0]].slug : 'uncategorized'
    },

    date () {
      return new Date(this.post.date).toLocaleDateString()
    },
  },
} as ComponentOptions<PostComponent>
