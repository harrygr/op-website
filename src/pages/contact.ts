import template from './contact.template.html'

export default {
  template,
  mounted () {
    this.$store.commit('setTitle', 'Contact' )
  },
}
