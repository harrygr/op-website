import {unsluggify} from './utils'

it('unsluggifies a slug', () => {
  const slugs = {
    'hello': 'Hello',
    'hello-world': 'Hello World',
  }

  Object.keys(slugs).forEach(slug => {
    expect(unsluggify(slug)).toEqual(slugs[slug])
  })
})