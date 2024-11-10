<template>
  <div class="w-full">
    <section class="flex flex-row items-center mx-auto gap-4 p-4 w-1/2">
      <AppStoresQuoteOfTheDay />
    </section>
    <section class="flex flex-col gap-4 p-4 bg-primary-300 bg-opacity-50 rounded-sm">
      <BaseInput label="Search your store" size="lg" @keyup="debouncedSearch($event)" icon="mdi:magnify"
        placeholder="Write the name of the store you want to search" rounded="md" />
      <div v-if="status === 'pending'" class="flex justify-center items-center">
        <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-primary-invert"></div>
      </div>
      <AppStoresStoreList v-else :stores="getCurrentPageStores" />
      <BasePagination :item-per-page="10" :total-items="getTotalPages" :max-links-displayed="5"
        @update:current-page="updatePage($event)" :current-page="getCurrentPageNumber" />
    </section>
  </div>
</template>

<script lang="ts" setup>
const { getCurrentPageStores, getTotalPages, getCurrentPageNumber } = storeToRefs(useMyStoresStore())
const { updatePage, searchStores, setFilter, setStores } = useMyStoresStore()

import StoreApiAdapter from "~/services/api/StoreApiAdapter";
const api = new StoreApiAdapter();
const { data: stores, status, error } = await useAsyncData('stores', async () => {
  const stores = await api.getStores();
  setStores(stores)
  return stores
})

const debouncedSearch = useDebounceFn(async (event: string) => {
  setFilter(event.target.value)
}, 1000);

const route = useRoute()
onMounted(() => {
  if (route.query.page) {
    updatePage(parseInt(route.query.page as string))
  }
})

useHead({
  title: 'Stores',
  meta: [
    {
      name: 'description',
      content: 'List of stores',
    },
  ],
})

</script>

<style></style>