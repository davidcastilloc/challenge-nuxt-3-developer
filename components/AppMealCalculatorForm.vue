<template>
  <form @submit.prevent="calculateMeal">
    <BaseForm title="Meal Calculator Form" class="flex flex-col gap-4 p-3">
      <div class="capitalize" v-for="(ingredient, key) in ingredients" :key="key" >
        <BaseInput v-model="userIngredients[key]" :label="key" :placeholder="'Quantity of ' + key" />
      </div>
      <template #footer>
        <BaseButton type="submit">Calculate</BaseButton>
      </template>
    </BaseForm>
  </form>
</template>

<script lang="ts" setup>
const router = useRouter()
const ingredients = {
  pasta: 500,
  bacon: 200,
  eggs: 1,
  milk: 200,
  butter: 500,
  oil: 100,
}

const userIngredients = ref({
  pasta: 0,
  bacon: 0,
  eggs: 0,
  milk: 0,
  butter: 0,
  oil: 0,
})

const calculateMeal = () => {
  let maxMeals = Infinity;
  for (const [key, amount] of Object.entries(ingredients)) {
    const userAmount = userIngredients.value[key];
    const possibleMeals = Math.floor(userAmount / amount);
    if (possibleMeals < maxMeals) {
      maxMeals = possibleMeals;
    }
  }
  router.push({ name: 'results', query: { meals: maxMeals } });
}

</script>

<style></style>
