import { defineStore } from 'pinia'
import type { IStore } from '../types/AppTypes'
import StoreApiAdapter from '~/services/api/StoreApiAdapter'
export const useMyStoresStore = defineStore({
  id: 'myStoresStore',
  state: () => ({
    stores: [] as IStore[],
  }),
  actions: {
    async fetchStores() {
      const api = new StoreApiAdapter()
      this.stores = await api.getStores()
    },
  },
  getters: {
    getStores() : IStore[] {
      return this.stores
    }
  }
})
