import { shallowMount } from "@vue/test-utils";

import Modal from "@/components/Modal.vue";

describe("Modal.vue", () => {
  it("must contain a LoadingSpinner component", () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.findComponent({ name: "LoadingSpinner" }).exists()).toBe(
      true
    );
  });

  it("must contain a Quote component", () => {
    const wrapper = shallowMount(Modal, {
      data() {
        return { isLoading: false };
      }
    });
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.findComponent({ name: "Quote" }).exists()).toBe(true);
  });

  it("must come hidden by default", () => {
    const wrapper = shallowMount(Modal);
    const container = wrapper.find(".modal-container");
    expect(container.exists()).toBe(true);
    expect(container.attributes("style")).toBe("display: none;");
  });
});
