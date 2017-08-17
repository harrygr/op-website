import Vue, { ComponentOptions } from 'vue'

const template = `<nav
id="navbar"
class="fixed-ns z-5 w-100 bb top-0 bg-animate z-999 flex items-center justify-between relative b--black bg-white"
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
    class="black ph3-m ph4 pv3 no-underline dim dib outline-0 w-auto-ns w-100"
  >{{ link.text }}</a>
    </li>

</ul>
<slot></slot>
</nav>`

interface Link {
  url: string
  text: string
}

interface Props extends Vue {
  links: Link[]
}

export default {
  props: {
    links: {required: true, type: Array}
  },
  data() {
    return {
      open: false,
    }
  },
  template,
} as ComponentOptions<Props>