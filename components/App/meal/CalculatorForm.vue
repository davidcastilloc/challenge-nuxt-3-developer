<template>
  <div>
    <form @submit.prevent="calculateMeal">
      <h1 class="text-2xl text-primary-200 font-bold">
          Carbonara Calculator
        </h1>
      <BaseForm class="flex flex-col md:!flex-row p-3 ">
        <div class="capitalize" v-for="(ingredient, key) in ingredients" :key="key">
          <img :src="`/icons/${[key]}.gif`" class="relative h-6 w-6" />
          <BaseInput v-model="userIngredients[key]" :label="key" :placeholder="'Quantity of ' + key" />
        </div>
        <template #footer>
          <BaseButton type="submit" class="relative place-items-center">Calculate</BaseButton>
        </template>
      </BaseForm>
    </form>
  </div>
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
  pasta: 20000,
  bacon: 20000,
  eggs: 20000,
  milk: 20000,
  butter: 20000,
  oil: 20000,
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
