import axios from 'axios'
import config from './config'

const api = 'https://public-api.wordpress.com/rest/v1.1/sites'

export default {
  getLatestPost () {
    return axios.get(`${api}/${config.content.siteUrl}/posts`, {
      number: 1,
    }).then(response => response.data.posts[0])
  },

  getPosts ({category}) {
    return axios.get(`${api}/${config.content.siteUrl}/posts`, {
      params: {category},
    }).then(response => response.data.posts)
  },

  getPost ({id}) {
    return axios.get(`${api}/${config.content.siteUrl}/posts/${id}`).then(response => response.data)
  },
}
