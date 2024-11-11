<template>
  <BaseCard>
    <h2 v-if="title" class="text-2xl font-bold text-center">
      {{ title }}
    </h2>
    <slot name="default">
    </slot>
    <slot name="footer">
    </slot>
  </BaseCard>
</template>

<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    required: false,
  },
})
</script>

<style></style>