<template>
  <BaseMessage color="primary" icon="mingcute:bling-fill" rounded="md">
    <BaseProse class="prose">
      <h2 class="title font-bold my-0">
        Quote of the day
      </h2>
      <h5 class="text-xl">
        {{ props.quote }}
      </h5>
    </BaseProse>
  </BaseMessage>
</template>

<script lang="ts" setup>
const props = defineProps({
  quote: {
    type: String,
    required: true,
  },
})
</script>

<style></style>