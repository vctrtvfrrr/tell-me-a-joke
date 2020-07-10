import { shallowMount } from "@vue/test-utils";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

describe("LoadingSpinner.vue", () => {
  it("must contain a element with '.loader' class", () => {
    const wrapper = shallowMount(LoadingSpinner);
    expect(wrapper.find(".loader").exists()).toBe(true);
  });
});
