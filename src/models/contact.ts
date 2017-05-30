import { Models } from './'
import config from '../config'

export interface State {
  messageSent: boolean
}

interface Reducers {
  setMessageSent: Helix.Reducer<Models, State, boolean>
}

interface Effects {
  submitForm: Helix.Effect<Models, HTMLFormElement>
  confirmSubmission: Helix.Effect0<Models>
}

type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'contact'
export interface Namespace { 'contact': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
      messageSent: false,
    },
    reducers: {
      setMessageSent(_state, messageSent) {
        return { messageSent }
      },
    },
    effects: {
      confirmSubmission(state, send) {
        return new Promise((resolve, reject) => {
          send.contact.setMessageSent(true)
          setTimeout(() => {
            send.contact.setMessageSent(false)
            resolve(state)
            // tslint:disable-next-line:align
          }, 3000)
        })
      },
      submitForm(state, send, form) {
        const body = new FormData(form)
        const url = `https://formspree.io/${config.contact.email}`
        fetch(url, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body,
        })
          .then(() => form.reset())
          .then(send.contact.confirmSubmission)

        return Promise.resolve(state)
      },
    },
  }
}
