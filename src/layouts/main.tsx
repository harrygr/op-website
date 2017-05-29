import * as React from 'react'
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import { Models } from '../models'
import { State } from '../models/grams'
import Nav from './nav'
import Footer from './footer'

const layout = (page: Helix.Page<Models>['view']): Helix.Page<Models> => {
  return {
    onEnter(state, _prev, send) {
      window.scrollTo(0, 0)

      Object.keys(state.instagram.images).forEach((collection: keyof State['images']) => {
        if (!state.instagram.images[collection].length) {
          send.instagram.fetchImages(collection)
        }
      })

      if (!state.posts.posts.length) {
        send.posts.fetchPosts()
      }
    },
    view(state, prev, send) {
      return (
        <div className="flex flex-column min-vh-100">
          <Nav />
          <CSSTransitionGroup
            className="flex-auto"
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div key={state.location.pathname} className="georgia">
              {page(state, prev, send)}
            </div>
          </CSSTransitionGroup>
          <Footer grams={state.instagram.images.footer} />
        </div>
      )
    },
  }
}
export default layout