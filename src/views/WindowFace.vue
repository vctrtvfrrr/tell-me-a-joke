<template>
  <div @click="changeMood">
    <Face :mood="faceMood" />
    <Modal :show.sync="showModal" />
  </div>
</template>

<script>
import Face from "@/components/Face";
import Modal from "@/components/Modal";
import { resolveMetaInfo } from "@/services/MetaInfo";

export default {
  name: "WindowFace",

  components: {
    Face,
    Modal
  },

  data() {
    return {
      showModal: false
    };
  },

  methods: {
    changeMood($event) {
      // Ignores the click on any element other than the .overall
      if (!$event.target.classList.contains("overall")) {
        return;
      }

      if (this.faceMood === "neutral") {
        this.$store.dispatch("sadFace");
      } else if (this.faceMood === "sad") {
        this.showModal = true;
      }
    }
  },

  computed: {
    faceMood() {
      return this.$store.state.faceMood;
    }
  },

  metaInfo() {
    return resolveMetaInfo(this.faceMood);
  }
};
</script>
