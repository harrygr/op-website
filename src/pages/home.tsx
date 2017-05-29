import * as React from 'react';

import { Models } from '../models'
import Carousel from '../components/carousel'
import { getCategorySlug } from '../services/posts'

const tiles = [
  { imageUrl: require('./home/serge.jpg'), text: 'Serge', url: 'https://sergedenimes.com' },
  { imageUrl: require('./home/fitness.jpg'), text: 'Fitness', url: '/posts/fitness' },
  { imageUrl: require('./home/style.jpg'), text: 'Style', url: 'http://proudlockstyle.com' },
  { imageUrl: require('./home/travel.jpg'), text: 'Travel', url: '/posts/travel' },
]

const home: Helix.Page<Models>['view'] = (state, prev, send) => {

  const images = [
    '/carousel/pstyle-carousel.jpg',
    '/carousel/op-carousel.jpg',
    '/carousel/pstyle2-carousel.jpg',
    '/carousel/samson-carousel.jpg',
  ]

  return (
    <div className="Home">
      <Carousel images={images} className="mb3" childClassName="w-100" />

      <div className="mw8-5 ph3-ns ph2">
        {state.instagram.images.homePage.length ? (
          <Carousel
            images={state.instagram.images.homePage.map(i => i.images.standard_resolution.url)}
            childClassName="w4 ph2"
            className="mb3 ph2"
          />
        ) : null}
      </div>

      <div className="mw8-5 center center ph3-ns ph2">
        <div className="cf">
          {tiles.map((t, index) => (
            <div className={`fl w-100 w-25-ns sans-serif ph2`} key={index}>
              <a href={t.url} className="db relative saturate-hover grayscale mb3" target="_blank">
                <img src={t.imageUrl} alt="" className="db" />
                <span className="absolute absolute-center db white ttu f4">{t.text}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mw8-5 center ph3-ns ph2">
        <div className="fl w-100 w-50-ns ph2">
          {state.posts.posts.slice(0, 3).map((post, index) => (

            <a
              key={index}
              href={`/posts/${getCategorySlug(post)}/${post.slug}`}
              className="flex db link black outline-0"
            >
              <div className="db w-30-ns w-20 mw4 pr3 pb3">
                <img src={post.post_thumbnail.URL} alt="" className="w-100 h-auto" />
              </div>
              <div className="flex-1">
                <h1 className="f4 mv0 fw3 tracked-tight" dangerouslySetInnerHTML={{ __html: post.title }} />
                <p className="mv0">
                  <time dateTime={post.date} itemProp="datePublished" className="sans-serif f7 gray mb3">
                    {post.date.slice(0, 10)}
                  </time></p>
              </div>
            </a>
          ))}

        </div>

        <div className="fl w-100 w-50-ns ph2">
          <div className="videowrapper">
            <iframe
              width="640"
              height="801"
              src="https://player.vimeo.com/video/217851950?title=0&byline=0&portrait=0"
              frameBorder="0"
              allowFullScreen={true}
            />
          </div>
        </div>
        <div className="cf" />
      </div>
    </div>
  )
}

export default home;
