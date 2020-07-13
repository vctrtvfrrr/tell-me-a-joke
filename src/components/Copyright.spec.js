import { shallowMount } from "@vue/test-utils";
import Copyright from "@/components/Copyright.vue";

describe("Copyright.vue", () => {
  it("must contain a element with '.footer' class", () => {
    const wrapper = shallowMount(Copyright);
    expect(wrapper.find(".footer").exists()).toBe(true);
  });
});
