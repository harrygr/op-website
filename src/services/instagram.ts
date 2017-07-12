import {Result, Ok, Err} from 'space-lift'
import * as jsonp from 'fetch-jsonp'
const qs = require('qs')

import {AppError} from '../types'

type Response = Result<AppError, Instagram.Media[]>

export function getInstagramPhotos(userId: string, accessToken: string): Promise<Response> {
  const params = qs.stringify({
    access_token: accessToken,
    count: 10,
  })
  const url = `https://api.instagram.com/v1/users/${userId}/media/recent/?${params}`

  return jsonp(url)
    .then(response => response.json())
    .then((response: Instagram.Response) => {
      if (response.meta.code === 400) {
        return Err({
          message: response.meta.error_message,
          info: `URL: ${url}`,
        })
      }
      return Ok(response.data)
    })
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