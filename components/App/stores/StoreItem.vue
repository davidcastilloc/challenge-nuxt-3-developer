<template>
  <BaseCard class="flex flex-col gap-4 p-4" color="default" shadow="md" rounded="md">
    <div class="flex justify-between items-center bg-primary">
      <h1 class="text-2xl font-bold">
        {{ store.name }}
      </h1>
    </div>
    <p class="text-xl">
      {{ store.location }}
    </p>
  </BaseCard>
</template>

<script lang="ts" setup>
const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
})

const { store } = props 

</script>

<style>

</style>