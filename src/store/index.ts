import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state: {},
  mutations: {},
  getters: {},
  actions: {}
})

export function useStore() {
  return baseUseStore(key)
}