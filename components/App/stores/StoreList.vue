<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <AppStoresStoreItem v-for="store in props.stores" :key="store.id" :store="store" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  stores: {
    type: Array,
    required: true,
  },
})
</script>

<style></style>