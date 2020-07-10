import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";

import Modal from "@/components/Modal.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Modal.vue", () => {
  const store = new Vuex.Store({ state: { faceMood: "neutral" } });

  it("must contain a LoadingSpinner component", () => {
    const wrapper = shallowMount(Modal, { store, localVue });
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.findComponent({ name: "LoadingSpinner" }).exists()).toBe(
      true
    );
  });

  it("must contain a Quote component", () => {
    const wrapper = shallowMount(Modal, {
      store,
      localVue,
      data() {
        return { isLoading: false };
      }
    });
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.findComponent({ name: "Quote" }).exists()).toBe(true);
  });

  it("must come hidden by default", () => {
    const wrapper = shallowMount(Modal, { store, localVue });
    const container = wrapper.find(".modal-container");
    expect(container.exists()).toBe(true);
    expect(container.attributes("style")).toBe("display: none;");
  });
});
