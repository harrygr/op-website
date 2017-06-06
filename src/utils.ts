import upperFirst = require('lodash/upperFirst')

export function unsluggify(slug: string) {
  return slug.split('-').map(upperFirst).join(' ')
}