import { Models } from './'
import config from '../config'

export interface State {
}

interface Reducers {
}

interface Effects {
  submitForm: Helix.Effect<Models, HTMLFormElement>
}

type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'contact'
export interface Namespace { 'contact': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {},
    reducers: {},
    effects: {
      submitForm(state, send, form) {

        const body = new FormData(form)
        const url = `https://formspree.io/${config.contact.email}`
        fetch(url, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body,
        }).then(response => response.json())

        return Promise.resolve(state)
      },
    },
  }
}
