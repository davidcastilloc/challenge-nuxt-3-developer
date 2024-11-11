export const useCalculator = () => {
  const ingredients: { [key: string]: number } = {
    pasta: 500,
    bacon: 200,
    eggs: 1,
    milk: 200,
    butter: 500,
    oil: 100,
  };

  // validator
  function _validateIngredients(userIngredients: {
    [key: string]: number;
  }): Error | void {
    // si falta algún ingrediente en el objeto de ingredientes retorna trow error
    if (Object.values(userIngredients).some((value) => value === 0)) {
      throw new Error("Falta ingrediente en el objeto");
    }
    // si algun ingrediente vale 0 retorna trow error
    if (Object.values(userIngredients).some((value) => value < 0)) {
      throw new Error("Ingrediente negativo");
    }
    // si algun ingrediente no es un número retorna trow error
    if (
      Object.values(userIngredients).some((value) => typeof value !== "number")
    ) {
      throw new Error("Ingrediente no es un número");
    }
    // debe manejar casos en los que algunos ingredientes no están en el objeto
    if (Object.keys(userIngredients).length !== Object.keys(ingredients).length) {
      throw new Error("Faltan ingredientes en el objeto");
    }
  }

  function _getIngredientAmount(
    key: string,
    ingredients: { [key: string]: number }
  ) {
    return ingredients[key];
  }
  const calculateMeal = (
    userIngredients: { [key: string]: number } = ingredients
  ): number => {
    const useIngredients = userIngredients;
    // Validar ingredientes
    _validateIngredients(useIngredients);
    let maxMeals = Infinity;
    for (const [key, amount] of Object.entries(ingredients)) {
      const userAmount = _getIngredientAmount(key, useIngredients);
      const possibleMeals = Math.floor(userAmount / amount);
      if (possibleMeals < maxMeals) {
        maxMeals = possibleMeals;
      }
    }
    return maxMeals;
  };
  return { ingredients, calculateMeal };
};
