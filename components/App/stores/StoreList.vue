<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
    <AppStoresStoreItem v-for="store in props.stores" :key="store.id" :store="store" />
  </div>
</template>

<script lang="ts" setup>
import type { IStore } from '~/types/AppTypes';

const props = defineProps({
  stores: {
    type: Array as ()=> Array<IStore>,
    required: true,
  },
})
</script>

<style></style>