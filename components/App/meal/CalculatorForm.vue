<template>
  <div>
    <form @submit.prevent="eventShowResults">
      <h1 class="text-2xl text-primary-200 font-bold">
        Carbonara Calculator
      </h1>
      <BaseForm class="flex flex-col md:!flex-row p-3 ">
        <div class="capitalize" v-for="(ingredient, key) in ingredients" :key="key">
          <img :src="`/icons/${[key]}.gif`" class="relative h-6 w-6" />
          <BaseInputNumber v-model.number="userIngredients[key]" :label="key" :placeholder="'Quantity of ' + key"
            rounded="sm" size="sm" />
        </div>
        <template #footer>
          <BaseButton type="submit" class="relative place-items-center">Calculate</BaseButton>
        </template>
      </BaseForm>
    </form>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const userIngredients = ref({
  pasta: 50000,
  bacon: 50000,
  eggs: 50000,
  milk: 50000,
  butter: 50000,
  oil: 50000,
});
const { ingredients, calculateMeal } = useCalculator();
const eventShowResults = () => {
  router.push({ name: "results", query: { meals: calculateMeal(userIngredients.value) } });
};
</script>

<style></style>
