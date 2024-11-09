import { defineStore } from 'pinia'
import type { IStore } from '../types/AppTypes'
export const useMyStoresStore = defineStore({
  id: 'myStoresStore',
  state: () => ({
    stores: [] as IStore[],
  }),
  actions: {
    async fetchStores() {
      this.stores = await useApiStores().fetchStores()
    },
  },
  getters: {
    getStores() : IStore[] {
      return this.stores
    }
  }
})
