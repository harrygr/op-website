import 'tachyons/css/tachyons.css'
import 'flickity/css/flickity.css'
import './main.css'

import Vue from 'vue'
import Carousel from './components/carousel'
import InstaCarousel from './components/insta-carousel'
import InstaRow from './components/insta-row'

Vue.component('op-carousel', Carousel)
Vue.component('op-insta-carousel', InstaCarousel)
Vue.component('op-insta-row', InstaRow)

new Vue({
  el: '#root'
})