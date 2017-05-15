import Wallop from 'wallop'
import template from './home.template.html'
import './home.css'

export default {
  template,
  name: 'home',
  data () {
    return {
      videoId: '209747057',
      tiles: [
        {
          text: 'Style',
          link: 'http://proudlockstyle.com',
          image: '/static/home/style.jpg',
        }, {
          text: 'Fitness',
          link: '/posts/fitness',
          image: '/static/home/fitness.jpg',
        }, {
          text: 'Serge',
          link: 'http://sergedenimes.com',
          image: '/static/home/serge.jpg',
        }, {
          text: 'Travel',
          link: '/posts/travel',
          image: '/static/home/travel.jpg',
        },
      ],
    }
  },
  computed: {
    post () {
      return this.$store.getters.latestPost
    },
    grams () {
      return this.$store.state.instagrams
    },
  },
  mounted () {
    this.$store.commit('setTitle', null)
    this.initCarousel()
    this.initNav()
  },

  destroyed () {
    this.uninitNav()
  },

  methods: {
    initCarousel () {
      const carousel = new Wallop(this.$refs.carousel)
      setInterval(() => {
        carousel.next()
      }, 7000)
    },

    initNav () {
      this.handleNav()
      window.addEventListener('scroll', this.handleNav)
    },

    uninitNav () {
      this.$store.commit('setNavInverted', true)
      window.removeEventListener('scroll', this.handleNav)
    },

    handleNav () {
      this.$store.commit('setNavInverted', window.pageYOffset > 50)
    },
  },
}
