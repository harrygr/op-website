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

    <footer class="bg-black-70 mt4 pa4 white-40 f6 fw3">
      Copyright {{ new Date().getFullYear() }}
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('getPosts')
  },
  data () {
    return {
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
</style>
