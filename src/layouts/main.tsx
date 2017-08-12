import * as React from 'react'
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import { Models } from '../models'
// import { State } from '../models/grams'
import Nav from '../components/nav'
import Footer from './footer'

const links = [
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
  { url: '/posts/fitness', text: 'Fitness' },
  { url: '/posts/travel', text: 'Travel' },
  { url: 'http://sergedenimes.com/', text: 'Shop' },
  { url: '/contact', text: 'Contact' },
]

const layout = (page: Helix.Page<Models>): Helix.Page<Models> => {
  return {
    onEnter(state, prev, send) {
      send.app.onAppBoot()
      if (page.onEnter) {
        page.onEnter(state, prev, send)
      }
    },
    view(state, prev, send) {
      return (
        <div className="flex flex-column min-vh-100">
          <Nav
            links={links}
            invertOnScroll={state.location.pathname === '/'}
          />
          <CSSTransitionGroup
            className="flex-auto"
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div key={state.location.pathname} className="georgia">
              {page.view(state, prev, send)}
            </div>
          </CSSTransitionGroup>
          <Footer grams={state.instagram.images.footer} />
        </div>
      )
    },
  }
}
export default layout