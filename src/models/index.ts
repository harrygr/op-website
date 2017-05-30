import * as App from './app'
import * as Grams from './grams'
import * as Posts from './posts'
import * as Contact from './contact'

interface RootState {
  foo: number
}

interface RootModel {
  state: RootState
  actions: Reducers
}

type NamedModels = Helix.Models<
  App.Namespace &
  Grams.Namespace &
  Posts.Namespace &
  Contact.Namespace &
  { location: { state: Helix.LocationState, actions: Helix.LocationActions<Models> } }
  >

interface Reducers { }

interface Effects { }

export type Models = RootModel & NamedModels

export default function model(): Helix.ModelImpl<Models, RootState, Reducers, Effects> {
  return {
    state: {
      foo: 2,
    },
    reducers: {},
    effects: {},
    models: {
      [App.namespace]: App.model(),
      [Grams.namespace]: Grams.model(),
      [Posts.namespace]: Posts.model(),
      [Contact.namespace]: Contact.model(),
    },
  }
}
