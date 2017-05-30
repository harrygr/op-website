declare namespace Helix {
  // Create external model API for usage in views and effects
  export type Models<M extends any> = {
    state: { [N in keyof M]: M[N]['state'] },
    actions: { [N in keyof M]: M[N]['actions'] },
  }

  // Create model implemetation to check whether a model is implemented correctly
  export interface ModelImpl<M extends {state: any, actions: any}, S, R, E> {
    state: S,
    computed?: (state: S) => Partial<S>
    reducers: ReducersImpl<R>,
    effects: EffectsImpl<E>,
    models?: {
      [key: string]: ModelImpl<any, any, any, any>,
    }
  }

  // Create model API for useage in global models def
  export interface ModelApi<S, A> {
    state: S,
    actions: A
  }

  // Quick way to create actions from reducers & effects
  type Actions<R, E> = ReducersApi<R> & EffectsApi<E>

  // Pluck out reducer & effect implementations and apis (see types for reducers and effects below)
  type ReducersImpl<R extends any> = { [P in keyof R]: R[P]['impl'] }
  type EffectsImpl<E extends any> = { [P in keyof E]: E[P]['impl'] }
  type ReducersApi<R extends any> = { [P in keyof R]: R[P]['api'] }
  type EffectsApi<E extends any> = { [P in keyof E]: E[P]['api'] }

  // Reducers
  export type Reducer<M extends Models<any>, S, P> = {
    impl: (state: S, payload: P) => Partial<S>,
    api: (payload: P) => M['state'],
  }
  export type Reducer0<M extends Models<any>, S> = {
    impl: (state: S) => Partial<S>,
    api: () => M['state'],
  }
  export type Reducer2<M extends Models<any>, S, P, Q> = {
    impl: (state: S, payload1: P, payload2: Q) => Partial<S>,
    api: (payload1: P, payload2: Q) => M['state'],
  }

  // Effects
  export type Effect<M extends Models<any>, P> = {
    impl: (state: M['state'], actions: M['actions'], payload: P) => Promise<M['state']>,
    api: (payload: P) => Promise<M['state']>,
  }
  export type Effect0<M extends Models<any>> = {
    impl: (state: M['state'], actions: M['actions']) => Promise<M['state']>,
    api: () => Promise<M['state']>,
  }

  // Scoped models
  export interface ScopedModel<S, R, E> {
    scoped: boolean,
    state: S,
    computed?: (state: S) => Partial<S>
    reducers: ReducersImpl<R>,
    effects: EffectsImpl<E>,
    models?: {
      [key: string]: ScopedModel<any, any, any>,
    }
  }
  export type ScopedReducer<S, P> = {
    impl: (state: S, payload: P) => Partial<S>,
    api: (payload: P) => S,
  }
  export type ScopedReducer0<S> = {
    impl: (state: S) => Partial<S>,
    api: () => S,
  }
  export type ScopedReducer2<S, P, Q> = {
    impl: (state: S, payload1: P, payload2: Q) => Partial<S>,
    api: (payload1: P, payload2: Q) => S,
  }
  export type ScopedEffect<S, A, P> = {
    impl: (state: S, actions: A, payload: P) => Promise<S>,
    api: (payload: P) => Promise<S>,
  }
  export type ScopedEffect0<S, A> = {
    impl: (state: S, actions: A) => Promise<S>,
    api: () => Promise<S>,
  }
  export type ScopedEffect2<S, A, P, Q> = {
    impl: (state: S, actions: A, payload1: P, payload2: Q) => Promise<S>,
    api: (payload1: P, payload2: Q) => Promise<S>,
  }

  // Base location model
  export interface LocationState { pathname: string, params: { [key: string]: string } }
  export interface LocationReducers {}
  export interface LocationEffects<M> { set: Helix.Effect<any, string> }
  export type LocationActions<M> = Helix.Actions<LocationReducers, LocationEffects<M>>

  // Views / router
  export interface Routes<M extends Models<any>> { [key: string]: any }
  export type View<M extends Models<any>> = (state: M['state'], prev: M['state'], actions: M['actions']) => any
  export type PageConstructor<M extends Models<any>> = () => Page<M>
  export interface Page<M extends Models<any>> {
    onEnter?: (state: M['state'], prev: M['state'], actions: M['actions']) => any,
    onUpdate?: (state: M['state'], prev: M['state'], actions: M['actions']) => any,
    onLeave?: (state: M['state'], prev: M['state'], actions: M['actions']) => any,
    view: (state: M['state'], prev: M['state'], actions: M['actions']) => any,
  }
}