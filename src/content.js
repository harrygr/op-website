import contentful from 'contentful'
import config from './config'

export default contentful.createClient(config.contentful)
