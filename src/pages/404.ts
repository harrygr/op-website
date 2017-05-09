import template from './404.template.html'

export default {
  template,
  mounted () {
    this.$store.commit('setTitle', '404 Page Not Found')
  },
}
