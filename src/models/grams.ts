import { Models } from './'
import { Instagram, getInstagramPhotos } from '../services/instagram'
import config from '../config'

export type ImageCollection = 'homePage' | 'footer'

export interface State {
  images: Record<ImageCollection, Instagram.Media[]>
}

interface Reducers {
  setImages: Helix.Reducer<Models, State, { collection: ImageCollection, images: Instagram.Media[] }>
}

interface Effects {
  fetchImages: Helix.Effect<Models, ImageCollection>
}
type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'instagram'
export interface Namespace { 'instagram': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
      images: {
        homePage: [],
        footer: [],
      },
    },
    reducers: {
      setImages(state, { collection, images }) {
        return { images: { ...state.images, [collection]: images } }
      },
    },
    effects: {
      fetchImages(state, send, collection) {
        return getInstagramPhotos(config.instagram[collection].userId, config.instagram[collection].token)
          .then(response => {
            return response.fold(
              err => console.warn(err.message, err.info),
              images => send.instagram.setImages({ images, collection }),
            )
          })
      },
    },
  }
}
