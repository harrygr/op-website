<template>
  <div id="app">
    <nav id="navbar" class="fixed z-5 w-100 bb top-0" :class="$store.state.invertNav ? 'b--black bg-white' : 'b--white'">
      <ul class="list pl0 ma0 flex justify-center f4 ttu no-underline">
        <li v-for="item in navItems" class="dib">
          <router-link :to="item.link" class="ph4 pv3 no-underline dim dib outline-0" :class="$store.state.invertNav ? 'black' : 'white'">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>

    <!--
    <header class="tc ph4">
      <router-link to="/" class="dib w-60-ns mw-100 mw6-ns">
        <img src="/static/op-logo-vector-with-tagline.svg" alt="">
      </router-link>
    </header>
    -->

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
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
          title: 'Shop',
          link: 'http://sergedenimes.com',
        },
      ],
    }
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
}
</style>
