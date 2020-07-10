<template>
  <div v-show="show" class="modal-container">
    <div class="modal">
      <LoadingSpinner v-if="isLoading" />
      <Quote v-else :text="joke" />
    </div>
  </div>
</template>

<script>
import time2read from "@/utils/time2read";
import Quote from "@/components/Quote";
import JokesAPI from "@/services/JokesAPI";
import LoadingSpinner from "@/components/LoadingSpinner";

export default {
  name: "Modal",

  components: {
    Quote,
    LoadingSpinner
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isLoading: true,
      joke: ""
    };
  },

  watch: {
    show(val) {
      if (val) {
        this.getJoke();
      }
    }
  },

  methods: {
    async getJoke() {
      this.isLoading = true;
      this.joke = await JokesAPI.getJoke();
      this.isLoading = false;
      this.readJoke();
    },

    readJoke() {
      // Calculate time to read the joke
      const milisecs = time2read(this.joke);

      // Reading the joke
      setTimeout(() => {
        this.$store.dispatch("neutralFace");
        setTimeout(() => {
          this.$store.dispatch("happyFace");
        }, milisecs);
      }, milisecs);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-container {
  overflow: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.modal {
  position: relative;
  background-color: #fffdf5;
  color: #3f3f5a;
  border-radius: 6px;
  max-width: 550px;
  max-height: calc(100vh - 80px);
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px 50px;
  margin: 40px;
}
</style>
