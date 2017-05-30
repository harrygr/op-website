import { Models } from './'

interface State {
  navInverted: boolean
}

interface Reducers {
  setNavInverted: Helix.Reducer<Models, State, boolean>
}

interface Effects {
  setPageTitle: Helix.Effect<Models, string>
  watchNav: Helix.Effect0<Models>
}

type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'app'
export interface Namespace { 'app': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
      navInverted: false,
    },
    reducers: {
      setNavInverted(_state, navInverted) {
        return { navInverted }
      },
    },
    effects: {
      watchNav(state, send) {
        window.addEventListener('scroll', () => send.app.setNavInverted(window.pageYOffset > 50))
        return Promise.resolve(state)
      },
      setPageTitle(state, send, title) {
        document.title = title ? `${title} | Oliver Proudlock` : 'Oliver Proudlock'
        return Promise.resolve(state)
      },
    },
  }
}