import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  collapse: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state: {
    collapse: false
  },
  mutations: {
    setCollapse(state: State, collapse: boolean) {
      state.collapse = collapse
    }
  },
  getters: {
    getCollapse(state: State) {
      return state.collapse
    }
  },
  actions: {}
})

export function useStore() {
  return baseUseStore(key)
}
