// define test for StoreItem component
import { expect, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import StoreItem from "../StoreItem.vue";

test("StoreItem component renders correctly", async () => {
  const wrapper = mountSuspended(StoreItem, {
    props: {
      store: {
        id: 1,
        name: "Store 1",
        location: "123 Main St, Anytown, USA",
      },
    },
  });

  expect((await wrapper).html()).toMatchSnapshot();
});
