import Vue, { ComponentOptions } from 'vue'

const template = `<nav
id="navbar"
class="fixed-ns z-5 w-100 bb top-0 bg-animate z-999 flex items-center justify-between relative"
:class="invertedStyle"
>
<button
  class="br1 black dim pv2 ph3 ma3 ba dn-ns b--black outline-0 button-reset"
  @click="open = !open"
  >
  <i class="icon-menu"></i>
</button>

<ul
class="list pl0 ma0 flex-ns f6 ttu no-underline nav-links db-ns overflow-x-auto w-auto-ns w-100 bn-ns bt bb"
:class="open ? 'db' : 'dn'"
>

    <li class="db dib-ns" v-for="(link, index) in links" key={index}>
    <a
    :href="link.url"
    class="color-inherit ph3-m ph4 pv3 no-underline dim dib outline-0 w-auto-ns w-100"
  >{{ link.text }}</a>
    </li>

</ul>
<div :class="this.inverted ? 'b--white white' : 'b--black black'">
<slot></slot>
</div>
</nav>`

interface Link {
  url: string
  text: string
}

interface Props extends Vue {
  links: Link[]
  invert: boolean
  open: boolean
  inverted: boolean
  setInverted: (inverted: boolean) => void
}

export default {
  props: {
    links: {required: true, type: Array},
    invert: {required: false, type: Boolean, default: false}

  },
  data() {
    return {
      open: false,
      inverted: this.invert && window.pageYOffset < 50,
    }
  },
  methods: {
    setInverted(inverted: boolean) {
      this.inverted = inverted
    },
  },
  computed: {
    invertedStyle() {
      return this.inverted ? 'b--white white bg-transparent' : 'b--black black bg-white'
    }
  },
  mounted () {
    console.log('nav mounted')
    window.addEventListener('scroll', () => {
      this.setInverted( this.invert && window.pageYOffset < 50)
    })
  },
  template,
} as ComponentOptions<Props>