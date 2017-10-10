import 'tachyons/css/tachyons.css'
import 'flickity/css/flickity.css'
import './main.css'
import './icons.css'

import Vue from 'vue'
import Carousel from './components/carousel'
import InstaCarousel from './components/insta-carousel'
import InstaRow from './components/insta-row'
import ContactFrom from './components/contact-form'
import Nav from './components/collapsable-nav'
import ImageWall from './components/image-wall'

Vue.component('op-carousel', Carousel)
Vue.component('op-insta-carousel', InstaCarousel)
Vue.component('op-insta-row', InstaRow)
Vue.component('op-contact-form', ContactFrom)
Vue.component('op-nav', Nav)
Vue.component('op-image-wall', ImageWall)

new Vue({
  el: '#root'
})
