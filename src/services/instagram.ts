import {Result, Ok, Err} from 'space-lift'
import * as jsonp from 'fetch-jsonp'
import * as cache from 'lscache'
import md5 from 'blueimp-md5'
const qs = require('qs')

interface Error {
  message: string
  info: string
}

type Response = Result<Error, Instagram.Media[]>

export const getInstagramPhotos = (userId: string, accessToken: string): Promise<Response> => {
  const params = qs.stringify({
    access_token: accessToken,
    count: 10,
  })
  const url = `https://api.instagram.com/v1/users/${userId}/media/recent/?${params}`

  const key = `grams_${userId}_${md5(params)}`
  const result = cache.get(key)
  if (cache.get(key)) {
    return Promise.resolve(Ok(result))
  }

  return jsonp(url)
    .then(response => response.json())
    .then((response: Instagram.Response) => {
      if (response.meta.code === 400) {
        return Err({
          message: response.meta.error_message,
          info: `URL: ${url}`,
        })
      }
      cache.set(key, response.data, 22)
      return Ok(response.data)
    })
    .catch(err => Err(err))
}

export namespace Instagram {
  export interface ResponseMetaError {
    code: 400
    error_message: string
    error_type: string
  }

  export interface ResponseMetaSuccess {
    code: 200
  }
  export type ResponseMeta = ResponseMetaError | ResponseMetaSuccess

  export interface Response {
    data: Media[]
    meta: ResponseMeta
  }

  export interface User {
    id: string
    full_name: string
    profile_picture: string
    username: string
  }

  export interface Image {
    width: number
    height: number
    url: string
  }

  export interface Caption {
    id: string
    text: string
    created_time: string
    from: User
  }

  export interface Media {
    id: string
    user: User
    images: {
      thumbnail: Image,
      low_resolution: Image,
      standard_resolution: Image,
    }
    created_time: string
    caption: Caption
    link: string
    tags: string[]
  }
}