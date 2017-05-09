// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import router from './router'
import store, {State} from './store'
import components from './components'

Vue.config.productionTip = false

Vue.use(Vuex)

Object.keys(components).forEach(name => Vue.component(name, components[name]))

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  router,
  store: new Vuex.Store<State>(store),
  template: '<app/>',
  components: { app },
})
