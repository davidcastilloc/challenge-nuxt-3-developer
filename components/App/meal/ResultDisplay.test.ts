// define test for ResultDisplay component
import { it, expect, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ResultDisplay from "./ResultDisplay.vue";

test("ResultDisplay component renders correctly", async () => {
  const wrapper = mountSuspended(ResultDisplay, {
    props: {
      meals: "2",
      ingredients: {
        pasta: 500,
        bacon: 200,
        eggs: 1,
        milk: 200,
        butter: 500,
        oil: 100,
      },
    },
  });

  expect((await wrapper).html()).toMatchSnapshot();
});
