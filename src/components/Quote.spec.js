import faker from "faker";
import { shallowMount } from "@vue/test-utils";

import Quote from "@/components/Quote.vue";

describe("Quote.vue", () => {
  it("must contain a element with '.blockquote' class", () => {
    const wrapper = shallowMount(Quote, { propsData: { text: "" } });
    expect(wrapper.find(".blockquote").exists()).toBe(true);
  });

  it("should change the blockquote content based on the prop.text", () => {
    const text = faker.lorem.text();
    const wrapper = shallowMount(Quote, { propsData: { text } });
    expect(wrapper.text()).toBe(text);
  });
});
