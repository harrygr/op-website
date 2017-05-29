import { Models } from './'

interface State {

}

interface Reducers {
}

interface Effects {
  setPageTitle: Helix.Effect<Models, string>
}

type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'app'
export interface Namespace { 'app': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
    },
    reducers: {
    },
    effects: {
      setPageTitle(state, send, title) {
        document.title = title
        return Promise.resolve(state)
      },
    },
  }
}
