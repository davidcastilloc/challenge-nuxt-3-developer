import { defineStore } from "pinia";
import type { IStore } from "../types/AppTypes";
export const useMyStoresStore = defineStore({
  id: "myStoresStore",
  state: () => ({
    stores: [] as IStore[],
    currentPage: 1,
    itemsPerPage: 12,
    filter: "",
  }),
  actions: {
    setFilter(search: string) {
      this.filter = search;
      this.currentPage = 1;
    },
    updatePage(number: number) {
      this.currentPage = number;
    },
    setStores(stores: IStore[]) {
      this.stores = stores;
    },
  },
  getters: {
    getCurrentPageStores(): IStore[] {
      /*.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      )*/
      return this.stores
        .filter((store) => store.name.includes(this.filter))
        .slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage
        );
    },
    getTotalPages(): number {
      if (this.filter.length > 0) {
        return Math.ceil(this.getCurrentPageStores.length / this.itemsPerPage);
      }
      return Math.ceil(this.stores.length / this.itemsPerPage);
    },
    getCurrentPageNumber(): number {
      return this.currentPage;
    },
  },
});
