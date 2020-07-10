import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import WindowFace from "@/views/WindowFace.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("WindowFace.vue", () => {
  const store = new Vuex.Store({ state: { faceMood: "neutral" } });

  it("must contain a Face and Modal components", () => {
    const wrapper = shallowMount(WindowFace, { store, localVue });
    expect(wrapper.findComponent({ name: "Face" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "Modal" }).exists()).toBe(true);
  });
});
