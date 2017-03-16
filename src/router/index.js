import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Posts from '@/pages/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '/posts/:category',
      name: 'Posts',
      component: Posts,
    },
  ],
})
