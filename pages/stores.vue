<template>
  <div class="w-full">
    <section class="flex flex-row items-center mx-auto gap-4 p-4 w-1/2">
      <AppStoresQuoteOfTheDay />
    </section>
    <section class="flex flex-col gap-4 p-4 bg-primary-300 bg-opacity-50 rounded-sm">
      <BaseInput label="Search your store" size="lg" @keyup="debouncedSearch($event)" icon="mdi:magnify"
        placeholder="Write the name of the store you want to search" rounded="md" />
      <div v-if="isLoading" class="flex justify-center items-center">
        <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
      </div>
      <AppStoresStoreList v-else :stores="getCurrentPageStores" />
      <BasePagination :item-per-page="10" :total-items="getTotalPages" :max-links-displayed="5"
        @update:current-page="updatePage($event)" :current-page="getCurrentPageNumber" />
    </section>
  </div>
</template>

<script lang="ts" setup>
const { getCurrentPageStores, getTotalPages, getCurrentPageNumber, isLoading } = storeToRefs(useMyStoresStore())
const { fetchStores, updatePage, searchStores } = useMyStoresStore()

import { useDebounceFn } from '@vueuse/core'

// useDebounceFn for search event
const debouncedSearch = useDebounceFn(async (event: string) => {
  await fetchStores()
  searchStores(event.target.value)
}, 500)


const route = useRoute()
onMounted(() => {
  fetchStores()
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