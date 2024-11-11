<template>
  <BaseMessage color="danger" icon="mdi:alert-circle-outline" rounded="md">
    <BaseProse class="prose">
      <h2 class="title font-bold my-0">
        Error
      </h2>
      <p class="text-sm">
        {{ error.message }}
      </p>
    </BaseProse>
  </BaseMessage>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Object as () => Error,
    required: true,
  },
})
</script>

<style></style>