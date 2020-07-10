<template>
  <div v-show="show" class="modal-container">
    <div class="modal">
      <LoadingSpinner />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner";

export default {
  name: "Modal",

  components: {
    LoadingSpinner
  },

  props: {
    show: {
      type: Boolean,
      default: false
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
