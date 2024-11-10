<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center">
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
      <p class="text-center text-xl">Loading...</p>
      <p class="text-center text-sm">Please wait while we load the page</p>
      <p class="text-center text-xs">This may take a few seconds</p>
      <p class="text-center text-xs">Please do not close the browser</p>
      <p class="text-center text-xs">If the page does not load, please refresh the page</p>
    </div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
})
nuxtApp.hook('page:finish', () => {
  loading.value = false
})

</script>

<style></style>