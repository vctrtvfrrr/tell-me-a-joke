import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("must contain a element with '.overall' class", () => {
    const wrapper = shallowMount(App, { stubs: ["router-view"] });
    expect(wrapper.find(".overall").exists()).toBe(true);
  });
});
