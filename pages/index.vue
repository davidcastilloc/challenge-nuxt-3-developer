<!-- Best Landing page carbonara Site ShurikenUI -->
<template>
  <div class="w-full lg:w-11/12">
    <AppMealCalculatorForm  />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Company INC | Meal Calculator',
  meta: [
    {
      name: 'description',
      content: 'Meal calculator',
    },
  ],
})

// transitions
definePageMeta(
  {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  }
)

</script>

<style scoped></style>