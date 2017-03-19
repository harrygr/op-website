// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import components from './components'

Vue.config.productionTip = false

Vue.use(Vuex)

Object.keys(components).forEach(name => Vue.component(name, components[name]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(store),
  template: '<App/>',
  components: { App },
})
