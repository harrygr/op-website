<template>
  <div id="app" class="flex flex-column min-vh-100">
    <nav id="navbar" class="fixed z-5 w-100 bb top-0 bg-animate z-999" :class="$store.state.invertNav ? 'b--black bg-white' : 'b--white'">
      <ul class="list pl0 ma0 flex justify-center f4 ttu no-underline">
        <li v-for="item in navItems" class="dib">
          <router-link v-if="item.link.slice(0,4) !== 'http'" :to="item.link" class="ph4 pv3 no-underline dim dib outline-0" :class="$store.state.invertNav ? 'black' : 'white'">{{ item.title }}</router-link>
          <a v-if="item.link.slice(0,4) === 'http'" :href="item.link" class="ph4 pv3 no-underline dim dib outline-0" :class="$store.state.invertNav ? 'black' : 'white'">{{ item.title }}</a>
        </li>
      </ul>
    </nav>

    <main class="flex-1">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

    <footer class="bg-black-70 mt4 pa4 white-40 f6 fw3 flex justify-between items-center">
      <div>&copy; Copyright {{ new Date().getFullYear() }}</div>
      <div class="ml-auto">
        <a v-for="icon in socialIcons" :href="icon.link" class="link br-pill ba dib white-40 b-white-40 hover-white-60 f5 inline-flex items-center justify-center h2 w2 ml2">
          <i class="fa fa-fw" :class="`fa-${icon.icon}`"></i>
        </a>
      </div>
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
  },
}
</script>

<style>
body,
html {
  background: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
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
</style>
