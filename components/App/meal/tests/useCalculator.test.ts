import { describe, it, expect } from "vitest";
import { useCalculator } from "@/composables/useCalculator"; // Asegúrate de que la ruta sea correcta

describe("useCalculator", () => {
  const { calculateMeal } = useCalculator();

  it("debe retornar la cantidad máxima de comidas posibles con los ingredientes predeterminados", () => {
    const maxMeals = calculateMeal();
    expect(maxMeals).toBe(1); // Dado que todos los ingredientes en el objeto inicial están listos para una comida
  });

  it("debe calcular correctamente la cantidad de comidas con una cantidad mayor de ingredientes", () => {
    const userIngredients = {
      pasta: 1000,
      bacon: 400,
      eggs: 2,
      milk: 400,
      butter: 1000,
      oil: 200,
    };
    const maxMeals = calculateMeal(userIngredients);
    expect(maxMeals).toBe(2);
  });

  it("debe retornar trow error si algún ingrediente es valor 0", () => {
    const userIngredients = {
      pasta: 0,
      bacon: 200,
      eggs: 1,
      milk: 200,
      butter: 500,
      oil: 100,
    };
    expect(() => calculateMeal(userIngredients)).toThrow(Error);
    expect(() => calculateMeal(userIngredients)).toThrow(
      "Falta ingrediente en el objeto"
    );
  });

  it("debe manejar casos en los que algunos ingredientes no están en el objeto", () => {
    const userIngredients = {
      pasta: 1000,
      bacon: 400,
      eggs: 2,
    };
    expect(() => calculateMeal(userIngredients)).toThrow(Error);
    expect(() => calculateMeal(userIngredients)).toThrow(
      "Faltan ingredientes en el objeto"
    );
  });
});
