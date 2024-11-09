<template>
  <BaseCard>
    <h2 class="text-2xl font-bold">
      {{ title }}
    </h2>
    <slot name="default">
    </slot>
    <slot name="footer">
    </slot>
  </BaseCard>
</template>

<script lang="ts" setup>
defineComponent(
  'BaseForm'
)
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style></style>