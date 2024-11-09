import { defineStore } from "pinia";
import type { IStore } from "../types/AppTypes";
import StoreApiAdapter from "~/services/api/StoreApiAdapter";
export const useMyStoresStore = defineStore({
  id: "myStoresStore",
  state: () => ({
    stores: [] as IStore[],
    currentPage: 1,
    itemsPerPage: 10,
    loading: false,
  }),
  actions: {
    async fetchStores() {
      const api = new StoreApiAdapter();
      this.loading = true
      this.stores = await api.getStores();
      this.loading = false
    },
    searchStores(search: string) {
      this.stores = this.stores.filter((store) => store.name.includes(search));
      this.currentPage = 1;
    },
    updatePage(number: number) {
      this.currentPage = number;
    },
  },
  getters: {
    getCurrentPageStores(): IStore[] {
      return this.stores.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    },
    getTotalPages(): number {
      return Math.ceil(this.stores.length / this.itemsPerPage);
    },
    isLoading(): boolean {
      return this.loading;
    },
  },
});
