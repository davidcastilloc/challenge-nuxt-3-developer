<template>
  <BaseCard class="flex flex-col gap-4" color="default" shadow="md" rounded="md">
    <div class="flex justify-between items-center bg-primary-300 rounded-t-md p-2 ">
      <h1 class="text-xl font-bold flex items-center">
        <Icon name="mdi:store-outline" class="h-6 w-6" color="primary" />
        {{ store.name }}
      </h1>
    </div>
    <div class="flex justify-between items-center p-4">
      <BaseList class="w-full">
        <BaseListItem :title="store.location" color="primary">
          <Icon name="mdi:map-marker-outline" class="text-primary-500 h-6 w-6" color="primary" />
        </BaseListItem>
        <BaseListItem title="(555) 123-4567" color="primary">
          <Icon name="mdi:phone-outline" class="text-primary-500 h-6 w-6" color="primary" />
        </BaseListItem>
        <hr>
        <div>
          <BaseTag color="success" variant="outline">
            Open
          </BaseTag>
          <div class="flex items-center mt-2">
            <Icon name="mdi:clock-outline" class="text-primary-500 h-6 w-6" color="primary" />
            <span class="ml-2"> Mon-Fri: 9:00 AM - 10:00 PM</span>
          </div>
        </div>
      </BaseList>
    </div>
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

<style></style>