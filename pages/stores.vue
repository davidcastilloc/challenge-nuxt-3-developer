<template>
  <section class="flex flex-col gap-4 p-4">
    <AppStoresQuoteOfTheDay />
  </section>
  <section class="flex flex-col gap-4 p-4">
    <BaseCard class="flex flex-col gap-4 p-4" color="default" shadow="md" rounded="md">
      <h1 class="text-2xl font-bold">
        Stores
      </h1>
      <p class="text-xl">
        List of stores
      </p>
    </BaseCard>
    <BaseInput label="Search your store" v-model="search" @input="filterEvent($event)" icon="mdi:magnify"
      placeholder="Write the name of the store you want to search and press enter" />
    <div v-if="isLoading" class="flex justify-center items-center">
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
    </div>
    <AppStoresStoreList v-else :stores="getCurrentPageStores" />
    <BasePagination :item-per-page="10" :total-items="getTotalPages" :max-links-displayed="5"
      @update:current-page="updatePage($event)" :current-page="getCurrentPageNumber" />
  </section>

</template>

<script lang="ts" setup>
const { getCurrentPageStores, getTotalPages, getCurrentPageNumber, isLoading } = storeToRefs(useMyStoresStore())
const { fetchStores, updatePage, searchStores } = useMyStoresStore()

const filterEvent = async (event: string) => {
  console.log("filterEvent", event.target.value);
  await fetchStores();
  searchStores(event.target.value);
}
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