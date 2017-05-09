import Wallop from 'wallop'
import template from './home.template.html'
import './home.css'

export default {
  template,
  name: 'home',
  data() {
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
    post() {
      return this.$store.getters.latestPost
    },
    carouselGrams() {
      return this.$store.state.instagrams.map(gram => {
        return {
          image: gram.images.standard_resolution.url,
          link: gram.link,
          caption: gram.caption.text,
        }
      })
    },
  },
  mounted() {
    this.$store.commit('setTitle', { title: null })
    this.initCarousel()
    this.initNav()
    if (!this.$store.state.instagrams.length) {
      this.$store.dispatch('getInstagrams')
    }
  },

  destroyed() {
    this.uninitNav()
  },

  methods: {
    initCarousel() {
      const carousel = new Wallop(this.$refs.carousel)
      setInterval(() => {
        carousel.next()
      }, 7000)
    },

    initNav() {
      this.handleNav()
      window.addEventListener('scroll', this.handleNav)
    },

    uninitNav() {
      this.$store.commit('setNavInverted', true)
      window.removeEventListener('scroll', this.handleNav)
    },

    handleNav() {
      this.$store.commit('setNavInverted', window.pageYOffset > 50)
    },
  },
}
