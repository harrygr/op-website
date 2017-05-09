import template from './app.template.html'
import './app.css'

export default {
  template,
  name: 'app',
  mounted () {
    this.$store.dispatch('getPosts', {})
  },
  data () {
    return {
      navVisible: false,
      socialIcons: [
        {
          icon: 'twitter',
          link: 'http://www.twitter.com/oliverproudlock',
        }, {
          icon: 'tumblr',
          link: 'http://soserge.com/',
        }, {
          icon: 'youtube',
          link: 'http://www.youtube.com/oliverproudlock',
        }, {
          icon: 'instagram',
          link: 'http://instagram.com/proudlock',
        },

      ],
      navItems: [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Style', link: 'http://proudlockstyle.com' },
        { title: 'Fitness', link: '/posts/fitness' },
        { title: 'Shop', link: 'http://sergedenimes.com' },
        { title: 'Travel', link: '/posts/travel' },
        { title: 'Contact', link: '/contact' },
      ],
    }
  },
  computed: {
    travelPosts () {
      return this.$store.getters.postsInCategory('travel')
    },

    navLinkClass () {
      const textColor = this.$store.state.invertNav ? 'black' : 'white'
      return `ph3-m ph4 pv3 no-underline dim dib outline-0 w-auto-ns w-100 ${textColor}`
    },
    pageTitle () {
      return (this.$store.state.title ? `${this.$store.state.title} | ` : '') + 'Oliver Proudlock'
    },
  },
  watch: {
    pageTitle (title) {
      document.title = title
    },
  },
}
