import template from './post.template.html'
import './post.css'

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
    category() {
      const categories = Object.keys(this.post.categories)
      return categories.length ? this.post.categories[categories[0]].slug : 'uncategorized'
    },

    date() {
      return new Date(this.post.date).toLocaleDateString()
    },
  },
}
