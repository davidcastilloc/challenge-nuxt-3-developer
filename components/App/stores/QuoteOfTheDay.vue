<template>
  <BaseQuote :quote="quote" />
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
import QuoteApiAdapter from '~/services/api/QuoteApiAdapter'
const api = new QuoteApiAdapter()
const { data: quote } = await useAsyncData('quote-of-the-day', () => api.getQuoteOfTheDay())
</script>

<style></style>