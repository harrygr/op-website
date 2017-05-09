import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Posts from '@/pages/Posts'
import Post from '@/pages/Post'
import NotFound from '@/pages/404'

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
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }, {
      path: '/posts/:category',
      name: 'Posts',
      component: Posts,
    }, {
      path: '/posts/:category/:id',
      name: 'Post',
      component: Post,
    }, {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
