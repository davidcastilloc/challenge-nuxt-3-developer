<template>
  <BaseCard class="w-full md:w-1/2 lg:w-1/3">
    <AppMealResultDisplay :meals="meals" :ingredients="ingredients" />
  </BaseCard>
</template>

<script lang="ts" setup>
const route = useRoute()
const meals = computed(() => route.query.meals)
const ingredients = computed(() => {
  return {
    pasta: 500,
    bacon: 200,
    eggs: 1,
    milk: 200,
    butter: 500,
    oil: 100,
  }
})
useHead({
  title: 'Results',
  meta: [
    {
      name: 'description',
      content: 'Results of the meal calculator',
    },
  ],
})
</script>

<style></style>