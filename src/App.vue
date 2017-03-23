<template>
  <div id="app" class="flex flex-column min-vh-100">
    <nav
      id="navbar"
      class="fixed-ns z-5 w-100 bb top-0 bg-animate z-999 flex items-center justify-between relative"
      :class="$store.state.invertNav ? 'b--black bg-white' : 'b--white'"
    >
      <button
        class="br1 black dim pv2 ph3 ma3 ba dn-ns b--black outline-0 button-reset"
        :class="navVisible ? 'bg-black-20' : 'bg-white'"
        @click="navVisible = !navVisible"
      >
        <i class="fa fa-bars"></i>
      </button>

      <ul
        class="list pl0 ma0 flex-ns f4 ttu no-underline nav-links db-ns overflow-x-auto w-auto-ns w-100"
        :class="navVisible ? 'db shadow-4' : 'dn'"
      >
        <li v-for="item in navItems" class="db dib-ns" @click="navVisible = false">
          <router-link v-if="item.link.slice(0,4) !== 'http'" :to="item.link" :class="navLinkClass">{{ item.title }}</router-link>
          <a v-if="item.link.slice(0,4) === 'http'" :href="item.link" :class="navLinkClass">{{ item.title }}</a>
        </li>
      </ul>

      <ul class="ml-auto list pr2 dn-m db nav-social-icons">
        <li>
          <a
            v-for="icon in socialIcons"
            :href="icon.link"
            class="link br-pill ba dib f6 inline-flex items-center justify-center h1-5 w1-5 mh1 dim"
            :class="$store.state.invertNav ? 'black' : 'white'"
          >
            <i class="fa fa-fw" :class="`fa-${icon.icon}`"></i>
          </a>
        </li>
      </ul>
    </nav>

    <main class="flex-1 georgia">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

    <footer class="bg-black-70 mt4 pa4 white-40 f6 fw3 flex justify-between items-center">
      <div>&copy; Copyright {{ new Date().getFullYear() }}</div>

    </footer>

    <transition name="fade">
      <div class="aspect-ratio--object flex items-center justify-center loading-overlay" v-show="$store.state.loading">
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw dark-gray"></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navVisible: false,
      socialIcons: [
        {
          icon: 'facebook',
          link: 'http://www.facebook.com/pages/Serge-DeNimes/197436926939967',
        }, {
          icon: 'twitter',
          link: 'http://www.twitter.com/sergedenimes',
        }, {
          icon: 'tumblr',
          link: 'http://soserge.com/',
        }, {
          icon: 'youtube',
          link: 'http://www.youtube.com/sdnimes',
        }, {
          icon: 'instagram',
          link: 'http://instagram.com/sergedenimes',
        },

      ],
      navItems: [
        {
          title: 'Home',
          link: '/',
        }, {
          title: 'About',
          link: '/about',
        }, {
          title: 'Travel',
          link: '/posts/travel',
        }, {
          title: 'Fitness',
          link: '/posts/fitness',
        }, {
          title: 'Shop',
          link: 'http://sergedenimes.com',
        },
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
</script>

<style>
  @media screen and (max-width: 30em) {
    .nav-links {
      background-color: white;
      position: absolute;
      top: 100%;
    }
    .nav-links a, .nav-social-icons a {
      color: black;
    }
  }

body,
html {
  background: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
}
.sans-serif {
  font-family: "Montserrat", sans-serif;
}
figure {
  margin: 0;
  box-sizing: border-box;
}
.flex-1 {
  flex: 1;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .15s;
}

.fade-enter-active {
  transition-delay: .15s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.loading-overlay {
  background: rgba(255,255,255, .3);
}
.h1-5 {
  height: 24px;
}
.w1-5 {
  width: 24px;
}

.videowrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
  max-width: 100%;
}
.videowrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
