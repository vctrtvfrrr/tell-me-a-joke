import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import WindowFace from "@/views/WindowFace.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("WindowFace.vue", () => {
  const store = new Vuex.Store({ state: { faceMood: "neutral" } });

  it("must contain a Face component", () => {
    const wrapper = shallowMount(WindowFace, { store, localVue });
    expect(wrapper.findComponent({ name: "Face" }).exists()).toBe(true);
  });
});
