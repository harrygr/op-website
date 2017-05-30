// tslint:disable:max-line-length
import * as React from 'react'

import Page from '../components/page'
import { Models } from '../models'
import NotFound from './not-found'

const page: Helix.Page<Models>['view'] = (state, prev, send) => {
  if (!state.posts.posts.length) {
    return ''
  }

  const post = state.posts.posts.find(p => p.slug === state.location.params.slug)
  if (!post) {
    send.app.setPageTitle('Not Found')
    return NotFound()
  }

  send.app.setPageTitle(post.title)
  return (
    <Page>
      <h1 className="f4 mv0 lh-copy fw3 ttu" dangerouslySetInnerHTML={{ __html: post.title }} />
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
}
export default page