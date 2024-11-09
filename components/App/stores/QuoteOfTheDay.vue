<template>
  <BaseMessage color="primary" icon="mingcute:bling-fill" rounded="md">
    <BaseProse class="prose">
      <h2 class="title font-bold my-0">
        Quote of the day
      </h2>
      <h5 class="subtitle">
        {{ quote.quote }}
      </h5>
      <p class="text-sm">
        {{ quote.author }}
      </p>
    </BaseProse>
  </BaseMessage>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const { $quote } = useNuxtApp()
const { data: quote } = await useAsyncData('quote-of-the-day', () => $quote)
</script>

<style></style>