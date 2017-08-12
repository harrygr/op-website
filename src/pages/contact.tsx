// tslint:disable:max-line-length
import * as React from 'react'

import Page from '../components/page'
import { Models } from '../models'
import Input from '../components/input'

const page: Helix.Page<Models> = {
  view(state, prev, send) {
    send.app.setPageTitle('About')

    return (
      <Page>
        <section className="fw2 lh-copy">
          <h1 className="f4 lh-copy fw3 ttu mb3">Contact</h1>
          <form onSubmit={e => {
            e.preventDefault()
            send.contact.submitForm(e.currentTarget)
          }}
          >
            <Input
              id="name"
              label="Your Name"
              required={true}
              name="name"
            />

            <Input
              id="email"
              type="email"
              label="Your Email"
              required={true}
              name="email"
            />

            <Input
              id="subject"
              label="Subject"
              required={true}
              name="subject"
            />

            <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

            <label htmlFor="message" className="db mb1">Message</label>
            <textarea
              id="message"
              className="input-reset ba pa2 db w-100 mb3"
              rows={10}
              required={true}
              name="message"
            />

            <button type="submit" className="pv3 ph4 bg-black white bw0 hover-bg-dark-gray pointer">Send Message</button>
            <p className={`pa3 fade dib ${state.contact.messageSent ? 'active' : ''}`}><i className="fa fa-check" /> Message Sent</p>
          </form>

        </section>
      </Page >
    )
  },
}
export default page