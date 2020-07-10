import { shallowMount } from "@vue/test-utils";
import Face from "@/components/Face.vue";

describe("Face.vue", () => {
  it("must change a mood class based on prop.mood", () => {
    const mood = "sad";
    const wrapper = shallowMount(Face, { propsData: { mood } });

    expect(wrapper.props("mood")).toBe(mood);
    expect(wrapper.find(`.face.${mood}`).exists()).toBe(true);
  });

  it("cannot contain an invalid mood", () => {
    const mood = "foo";
    const wrapper = shallowMount(Face, { propsData: { mood } });

    expect(wrapper.props("mood")).toBe(mood);
    expect(wrapper.find(`.face.${mood}`).exists()).toBe(false);
  });
});
