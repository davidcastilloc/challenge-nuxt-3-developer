<template>
  <BaseMessage color="primary" icon="mingcute:bling-fill" rounded="md">
    <BaseProse class="prose">
      <h2 class="title font-bold my-0">
        Quote of the day
      </h2>
      <h5 class="subtitle">
        {{ data.quote }}
      </h5>
      <p class="text-sm">
        {{ data.author }}
      </p>
    </BaseProse>
  </BaseMessage>
</template>

<script lang="ts" setup>
// get quote from server 24h cache
const { data } = await useAsyncData('quote-of-the-day', () => $fetch('/api/quote'), {
  transform: (input: any) => ({
    ...input,
    fetchedAt: Date.now(),
  }),
  getCachedData: (key, nuxtApp) => {
    const quoteCached =  nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    // Check if the quote is cached
    if (!quoteCached) {
      return
    }
    // Check if the quote is expired
    const DAY = 24 * 60 * 60 * 1000 // 24 hours in ms
    const expiration = new Date(quoteCached.fetchedAt);
    expiration.setTime(expiration.getTime() + DAY);
    const isExpired = expiration.getTime() < Date.now();
    // If the quote is expired, return undefined
    if (isExpired) {
      return
    }
    return quoteCached
  },
})
</script>

<style></style>