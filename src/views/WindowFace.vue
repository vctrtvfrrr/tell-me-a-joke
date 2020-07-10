<template>
  <div @click="changeMood">
    <Face :mood="faceMood" />
  </div>
</template>

<script>
import Face from "@/components/Face";

export default {
  name: "WindowFace",

  components: {
    Face
  },

  methods: {
    changeMood($event) {
      // Ignores the click on any element other than the .overall
      if (!$event.target.classList.contains("overall")) {
        return;
      }

      if (this.faceMood === "neutral") {
        this.$store.dispatch("sadFace");
      }
    }
  },

  computed: {
    faceMood() {
      return this.$store.state.faceMood;
    }
  }
};
</script>
