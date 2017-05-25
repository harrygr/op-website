import * as React from 'react'
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import { Models } from '../models'
import Nav from './nav'
import Footer from './footer'

const layout = (page: Helix.Page<Models>['view']): Helix.Page<Models> => {
  return {
    onEnter(state, _prev, send) {
      if (!state.instagram.images.length) {
        send.instagram.fetchImages()
      }
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
            <div key={state.location.pathname}>
              {page(state, prev, send)}
            </div>
          </CSSTransitionGroup>
          <Footer grams={state.instagram.images} />
        </div>
      )
    },
  }
}
export default layout