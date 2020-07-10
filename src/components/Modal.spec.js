import { shallowMount } from "@vue/test-utils";

import Modal from "@/components/Modal.vue";

describe("Modal.vue", () => {
  it("must contain a LoadingSpinner component", () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.findComponent({ name: "LoadingSpinner" }).exists()).toBe(
      true
    );
  });

  it("must come hidden by default", () => {
    const wrapper = shallowMount(Modal);
    const container = wrapper.find(".modal-container");
    expect(container.exists()).toBe(true);
    expect(container.attributes("style")).toBe("display: none;");
  });
});
