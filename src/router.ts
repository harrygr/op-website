import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home'
import about from './pages/about'
import contact from './pages/contact'
import posts from './pages/posts'
import post from './pages/post'
import notfound from './pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
    }, {
      path: '/about',
      name: 'About',
      component: about,
    }, {
      path: '/contact',
      name: 'Contact',
      component: contact,
    }, {
      path: '/posts/:category',
      name: 'Posts',
      component: posts,
    }, {
      path: '/posts/:category/:slug',
      name: 'Post',
      component: post,
    }, {
      path: '*',
      name: '404',
      component: notfound,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
