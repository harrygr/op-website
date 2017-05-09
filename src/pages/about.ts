import template from './about.template.html'

export default {
  template,
  mounted () {
    this.$store.commit('setTitle', 'About' )
  },
}
