<template>
  <BaseCard>
    <h2 class="text-2xl font-bold">
      Results
    </h2>
    <p>You can cook {{ meals }} meals!</p>
  </BaseCard>
</template>

<script lang="ts" setup>
const route = useRoute()
const meals = computed(() => route.query.meals)
</script>

<style>

</style>