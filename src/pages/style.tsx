import * as React from 'react'

import Page from '../components/page'
import { Models } from '../models'

const page: Helix.Page<Models> = {
  onEnter(state, _prev, send) {
    send.posts.fetchStylePosts()
    send.app.setPageTitle('About')
  },
  view(state, prev, send) {

    return (
      <Page>
        {
          state.posts.stylePosts
            .map(post => (
              <img src={post.post_thumbnail.URL} alt={post.title} />
            ))
        }
      </Page>
    )
  },
}

export default page
