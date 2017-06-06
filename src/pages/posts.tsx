import * as React from 'react'
import {unsluggify} from '../utils'

import Page from '../components/page'
import { Models } from '../models'
import { filterPostsByCategory } from '../services/posts'

const page: Helix.Page<Models>['view'] = (state, prev, send) => {
  const category = state.location.params.category
  const posts = filterPostsByCategory(state.posts.posts, category)

  if (!posts.length) {
    return <Page><span>No Posts Here</span></Page>
  }

  send.app.setPageTitle(`${unsluggify(category)} | Posts`)
  return (
    <Page>
      {posts.map((post, index) => (
        <article className={`cb pv4 ${index > 0 ? ' bt' : ''}`} key={index}>
          <a
            href={`/posts/${category}/${post.slug}`}
            className="db fl-ns w-30-ns w-50-l mw6 pr3-ns pb0-ns pb3">
            <img src={post.post_thumbnail.URL} alt={post.title} className="db" />
          </a>

          <a
            href={`/posts/${category}/${post.slug}`}
            className="black link"
          >
            <h1
              className="f4 mv0 lh-copy fw3 tracked-tight dim"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </a>
          <time
            dateTime={post.date}
            itemProp="datePublished"
            className="sans-serif f6 gray mb3 db"
          >
            {post.date.slice(0, 10)}
          </time>
          <section className="fw2 lh-copy post-content" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <div className="cb" />
        </article>
      ))}
    </Page>
  )
}
export default page