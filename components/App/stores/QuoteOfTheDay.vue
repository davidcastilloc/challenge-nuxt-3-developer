<template>
  <BaseMessage color="primary" icon="mingcute:bling-fill" rounded="md">
    <BaseProse class="prose">
      <h2 class="title font-bold my-0">
        Quote of the day
      </h2>
      <h5 class="subtitle">
        {{ quoteOfTheDay.quote }}
      </h5>
      <p class="text-sm">
        {{ quoteOfTheDay.author }}
      </p>
    </BaseProse>
  </BaseMessage>
</template>

<script lang="ts" setup>
import type { IQuoteOfTheDay } from '~/types/AppTypes';

defineProps({
 quoteOfTheDay: {
   type: Object as () => IQuoteOfTheDay,
   required: true,
 },
})
</script>

<style></style>