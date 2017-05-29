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
      <section className="fw2 lh-copy post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </Page>
  )
}
export default page