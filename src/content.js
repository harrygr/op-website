import axios from 'axios'
import config from './config'

const api = 'https://public-api.wordpress.com/rest/v1.1/sites'

export default {
  getPosts ({category}) {
    const defaultOptions = {number: 100}
    const options = category
      ? Object.assign({}, defaultOptions, {params: {category}})
      : defaultOptions

    return axios.get(`${api}/${config.content.siteUrl}/posts`, options)
      .then(response => response.data.posts)
  },

  getPost ({id}) {
    return axios.get(`${api}/${config.content.siteUrl}/posts/${id}`).then(response => response.data)
  },
}
