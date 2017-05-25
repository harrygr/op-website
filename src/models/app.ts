import { Models } from './'

interface State {
  greeting: string
}

interface Reducers {
  setGreeting: Helix.Reducer<Models, State, string>
 }

interface Effects {
  doFoo: Helix.Effect<Models, string>
}
type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'app'
export interface Namespace { 'app': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
      greeting: 'hello',
    },
    reducers: {
      setGreeting(_state, greeting) {
        return {greeting}
      },
    },
    effects: {
      doFoo(state, send) {
        return Promise.resolve(state)
      },
    },
  }
}
