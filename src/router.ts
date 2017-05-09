import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/Home'
import about from './pages/About'
import contact from './pages/Contact'
import posts from './pages/Posts'
import post from './pages/Post'
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
      path: '/posts/:category/:id',
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
