import { Models } from './'
import {Instagram, getInstagramPhotos} from '../services/instagram'

interface State {
  images: Instagram.Media[]
}

interface Reducers {
  setImages: Helix.Reducer<Models, State, Instagram.Media[]>
 }

interface Effects {
  fetchImages: Helix.Effect0<Models>
}
type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'instagram'
export interface Namespace { 'instagram': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
      images: [],
    },
    reducers: {
      setImages(_state, images) {
        return {images}
      },
    },
    effects: {
      fetchImages(state, send) {
        return getInstagramPhotos('1793053169', '1793053169.1677ed0.355f2352a70541f4aac229b746b637ad')
          .then(send.instagram.setImages)
      },
    },
  }
}
