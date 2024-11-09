<template>
  <div>
    <BaseCard>
      <h1>Welcome to the Meal Calculator</h1>
      <p>This is a simple meal calculator that allows you to calculate the number of meals you can cook for a given set of ingredients.</p>
      <p>Simply enter the quantities of each ingredient you have, and the calculator will tell you how many meals you can cook.</p>
      <BaseButton to="/calculator">Go to the Calculator</BaseButton>
    </BaseCard>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Home page',
    },
  ],
})
</script>

<style>

</style>