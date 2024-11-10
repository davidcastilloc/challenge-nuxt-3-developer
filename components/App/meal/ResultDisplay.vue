<template>
  <BasePlaceholderPage :title="`You could make ${meals} lunches with this recipe`">
    <template #image>
      <img src="/images/display-recipe.jpg" alt="Placeholder" class="w-full rounded-md mt-4" />
      <p class="text-2xl font-bold">
        The secret formula is
      </p>
      <div class="capitalize flex" v-for="(ingredient, key) in ingredients" :key="key">
        <img :src="`/icons/${[key]}.gif`" class="relative h-6 w-6" />
        <span class="ml-2 capitalize">{{ key }}: {{
          ingredient
        }} </span>
      </div>
    </template>
    <div class="mt-2 flex justify-center gap-2">
      <BaseButton to="/" color="primary" class="w-full mb-2">
        Back to Calculator
      </BaseButton>
    </div>
  </BasePlaceholderPage>
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