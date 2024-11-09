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
    <AppStoresStoreList :stores="getStores" />
  </section>

</template>

<script lang="ts" setup>
const { getStores } = storeToRefs(useMyStoresStore())
const { fetchStores } = useMyStoresStore()
onMounted(() => {
  fetchStores()
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