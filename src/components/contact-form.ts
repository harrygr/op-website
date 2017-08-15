import Vue, { ComponentOptions } from 'vue'
import axios from 'axios'

const template = `
<form class="fw2" :action="formAction" @submit.prevent="submitForm">
<div class="pb3">
  <label for="name" class="db mb1">Your Name</label>
  <input
    v-model="form.name"
    id="name"
    name="name"
    class="input-reset ba b--black ph3 pv2 db w-100"
    required="true"
  />
</div>

<div class="pb3">
<label for="email" class="db mb1">Your Email</label>
<input
  v-model="form.email"
  id="email"
  name="email"
  type="email"
  class="input-reset ba b--black ph3 pv2 db w-100"
  required="true"
/>
</div>

<div class="pb3">
<label for="subject" class="db mb1">Subject</label>
<input
  v-model="form.subject"
  id="subject"
  name="subject"
  type="text"
  class="input-reset ba b--black ph3 pv2 db w-100"
  required="true"
/>
</div>

<label for="message" class="db mb1">Message</label>
<textarea
  v-model="form.message"
  id="message"
  class="input-reset ba pa2 db w-100 mb3"
  rows="10"
  required="true"
  name="message"
/>

<input type="hidden" name="_gotcha" class="dn" />
<button type="submit" class="pv3 ph4 bg-black white bw0 hover-bg-dark-gray pointer">Send Message</button>
<p class="pa3 fade dib" :class="messageSent ? 'active' : ''">
  <i className="fa fa-check"></i> Message Sent
</p>
</form>
`

interface Form {
  name: string
  email: string
  subject: string
  message: string
}

interface Props extends Vue {
  contactEmail: string
  formAction: string
  form: Form
  loading: boolean
  messageSent: boolean

  submitForm: Function
  confirmSubmission: Function
}

export default {
  props: {
    contactEmail: {required: true, type: String},
  },
  computed: {
    formAction () {
      return `https://formspree.io/${this.contactEmail}`
    }
  },
  data () {
    return {
      form: emptyForm(),
      loading: false,
      messageSent: false,
    }
  },
  methods: {
    confirmSubmission () {
      this.messageSent = true
      setTimeout(() => {
        this.messageSent = false
      }, 3000)
    },
    submitForm () {
      this.loading = true
      axios.post(this.formAction, this.form)
        .then(() => {
          this.loading = false
          this.confirmSubmission()
          this.form = emptyForm()
        })
        .catch(() => {
          this.loading = false
        })

    },
  },
  template,
} as ComponentOptions<Props>

function emptyForm () {
  return {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}