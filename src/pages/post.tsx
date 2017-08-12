import * as React from 'react'

import Page from '../components/page'
import { Models } from '../models'
import NotFound from './not-found'

const page: Helix.Page<Models> = {
  onEnter(state, prev, send) {
    send.posts.getSinglePost(state.location.params.slug)
  },
  view(state, prev, send) {
    if (!state.posts.blogPosts.length) {
      return ''
    }

    const post = state.posts.currentPost
    if (!post) {
      send.app.setPageTitle('Not Found')
      return NotFound.view()
    }

    send.app.setPageTitle(post.title)
    return (
      <Page>
        <h1 className="f3 mv0 lh-copy fw3 tracked-tight" dangerouslySetInnerHTML={{ __html: post.title }} />
        <time
          dateTime={post.date}
          itemProp="datePublished"
          className="sans-serif f6 gray mb3 db"
        >
          {post.date.slice(0, 10)}
        </time>
        <section className="fw2 lh-copy post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </Page>
    )
  },
}
export default page