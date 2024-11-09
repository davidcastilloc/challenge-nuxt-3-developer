<template>
  <BaseCard>
    <h1 class="text-2xl font-bold">
      Meals Possible: {{ meals }}
    </h1>
    <h2 class="text-2xl font-bold">
      The secret formula is
    </h2>
    <p class="text-xl">
      Pasta: {{ ingredients.pasta }} <br />
      Bacon: {{ ingredients.bacon }} <br />
      Eggs: {{ ingredients.eggs }} <br />
      Milk: {{ ingredients.milk }} <br />
      Butter: {{ ingredients.butter }} <br />
      Oil: {{ ingredients.oil }}
    </p>
  </BaseCard>
</template>

<script lang="ts" setup>
defineProps({
  meals: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Object,
    required: true,
  },
})

</script>

<style></style>