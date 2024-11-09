import type { IStore } from '../types/AppTypes'
export const useApiStores = () => {
  const stores = ref<IStore[]>([])
  const fetchStores = async () => {
    const data = await $fetch('/api/stores')
    stores.value = data
    return data
  }
  return { stores, fetchStores }
}
