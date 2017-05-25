import * as jsonp from 'fetch-jsonp'
const qs = require('qs')

export function getInstagramPhotos(userId: string, accessToken: string): Promise<Instagram.Media[]> {
  const params = qs.stringify({
    access_token: accessToken,
    count: 10,
  })

  return jsonp(`https://api.instagram.com/v1/users/${userId}/media/recent/?${params}`)
    .then(response => response.json())
    .then((response: Instagram.Response) => response.data)
}

export namespace Instagram {
  export interface Response {
    data: Media[]
    meta: {code: number}
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