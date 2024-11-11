import { expect, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import StoreList from "../StoreList.vue";

test("StoreList", async () => {
  const wrapper = mountSuspended(StoreList, {
    props: {
      stores: [
        {
          id: 1,
          name: "Store 1",
          location: "123 Main St, Anytown, USA",
        },
        {
          id: 2,
          name: "Store 2",
          location: "123 Main St, Anytown, USA",
        },
      ],
    },
  });
  expect((await wrapper).html()).toMatchSnapshot();
});
