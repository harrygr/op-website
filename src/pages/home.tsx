import * as React from 'react';

import { Models } from '../models'
import Carousel from '../components/carousel'
import ButtonLink from '../components/button-link'
import { getCategorySlug } from '../services/posts'
import config from '../config'

const logo = require('./home/op-logo-vector-with-tagline-white.svg')

const tiles = [
  { imageUrl: require('./home/serge.jpg'), text: 'Serge', url: 'https://sergedenimes.com' },
  { imageUrl: require('./home/fitness.jpg'), text: 'Fitness', url: '/posts/fitness' },
  { imageUrl: require('./home/style.jpg'), text: 'Style', url: 'http://proudlockstyle.com' },
  { imageUrl: require('./home/travel.jpg'), text: 'Travel', url: '/posts/travel' },
]

const home: Helix.Page<Models>['view'] = (state, prev, send) => {
  send.app.setPageTitle('')

  const images = [
    '/carousel/pstyle-carousel.jpg',
    '/carousel/op-carousel.jpg',
    '/carousel/pstyle2-carousel.jpg',
    '/carousel/samson-carousel.jpg',
  ]

  return (
    <div className="Home">
      <div className="relative">
        <div
          className="flex justify-center items-center aspect-ratio--object"
        >
          <img src={logo} alt="" className="w-80 w-60-ns mw6-ns" />
        </div>
        <Carousel images={images} className="mb3" childClassName="w-100" options={{
          autoPlay: 6000,
        }} />
      </div>

      <div className="mw8-5 center ph3-ns ph2">
        {state.instagram.images.homePage.length ? (
          <Carousel
            images={state.instagram.images.homePage.map(i => i.images.standard_resolution.url)}
            childClassName="w4-5 ph2"
            className="mb3 ph2"
            options={{ autoPlay: 3000 }}
          />
        ) : null}
      </div>

      <div className="mw8-5 center ph3-ns ph2">
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

      <div className="mw8-5 center ph3-ns ph2 lh-copy serif ">
        {state.posts.posts.slice(0, 2).map((post, index) => {
          const link = `/posts/${getCategorySlug(post)}/${post.slug}`
          return (
            <div className="cf ph2 flex-ns mb3" key={index}>
              <div
                className={`w-33 h5 w-33-ns w-100 cover bg-center ${index % 2 ? 'order-5-ns' : ''}`}
                style={{ backgroundImage: `url(${post.post_thumbnail.URL})` }}
              />
              <div className={`flex-1 v-center ${index % 2 ? 'pr3-ns pr4-l' : 'pl3-ns pl4-l'}`}>
                <a href={link} className="link black">
                  <h2 className="f4 mb2 normal" dangerouslySetInnerHTML={{ __html: post.title }} />
                </a>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                <ButtonLink href={link}>Read More</ButtonLink>
              </div>
            </div>
          )
        })}
        {/*
          <a
            key={index}
            href={`/posts/${getCategorySlug(post)}/${post.slug}`}
            className="db fl w-100 w-50-ns ph2 mb3 outline-0 link"
          >
            <div
              className="w-100 h5-5 cover bg-center flex items-center justify-center tc ph3"
              style={{
                backgroundImage: `url(${post.post_thumbnail.URL})`,
              }}
            >
              <div>
                <h2 className="white ttu f5 f4-ns mb2 normal" dangerouslySetInnerHTML={{ __html: post.title }} />
                <time dateTime={post.date} itemProp="datePublished" className="sans-serif f7 near-white">
                  {post.date.slice(0, 10)}
                </time>
              </div>
            </div>
          </a>*/}

      </div>

      <div className="mw8-5 center ph3-ns ph2">
        <div className="fl w-100 w-50-ns ph2 mb3">
          <div className="videowrapper">
            <iframe
              width="640"
              height="801"
              src={`https://player.vimeo.com/video/${config.videos.video1}?title=0&byline=0&portrait=0`}
              frameBorder="0"
              allowFullScreen={true}
            />
          </div>
        </div>

        <div className="fl w-100 w-50-ns ph2 mb3">
          <div className="videowrapper">
            <iframe
              width="640"
              height="801"
              src={`https://player.vimeo.com/video/${config.videos.video2}?title=0&byline=0&portrait=0`}
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
