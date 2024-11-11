<template>
  <div class="w-full">
    <section class="flex flex-row items-center mx-auto gap-4 p-4 w-full lg:w-1/2">
      <AppStoresQuoteOfTheDay :quote-of-the-day="quoteOfTheDay" />
    </section>
    <section class="flex flex-col gap-4 p-4 bg-primary-50 bg-opacity-90 rounded-sm">
      <BaseInput label="Search your store" size="lg" v-model="inputFilter" @change="debouncedSearch" icon="mdi:magnify"
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

<script setup>
const { getCurrentPageStores, getTotalPages, getCurrentPageNumber } = storeToRefs(useMyStoresStore())
const { updatePage, setFilter, setStores } = useMyStoresStore()
const inputFilter = ref('')
import { useQuoteOfTheDay } from "~/composables/useQuoteOfTheDay";
import StoreApiAdapter from "~/services/api/StoreApiAdapter";
const api = new StoreApiAdapter();
const { data: stores, status, error } = await useAsyncData('stores', async () => {
  const stores = await api.getStores();
  setStores(stores)
  return stores
})

const { data: quoteOfTheDay } = await useQuoteOfTheDay()

const debouncedSearch = useDebounceFn(async () => {
  setFilter(inputFilter.value)
}, 1000);

const route = useRoute()
onMounted(() => {
  if (route.query.page) {
    updatePage(parseInt(route.query.page))
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