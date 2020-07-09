<template>
  <div ref="face" :class="['face', faceMood]">
    <div class="eyebrow left" />
    <div class="eyebrow right" />
    <div class="eye left" />
    <div class="eye right" />
    <div class="mouth" />
  </div>
</template>

<script>
export default {
  name: "WindowFace",

  props: {
    mood: {
      type: String,
      default: "neutral"
    }
  },

  mounted() {
    this.setFaceSize();
  },

  methods: {
    setFaceSize() {
      const faceElement = this.$refs.face;
      const faceSize = window.screen.height * 0.4;
      faceElement.style.width = `${faceSize}px`;
      faceElement.style.height = `${faceSize}px`;
    }
  },

  computed: {
    faceMood() {
      // Validation for the 'mood' property
      return ["happy", "neutral", "sad"].includes(this.mood)
        ? this.mood
        : "neutral";
    }
  }
};
</script>

<style lang="scss" scoped>
.face {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  &.happy .mouth {
    border-bottom-color: #d9bb62;
    top: 10%;
  }

  &.neutral .mouth {
    border-radius: 0;
    border: 3px solid #d9bb62;
    bottom: 35%;
    width: 40%;
    height: 0;
    left: 30%;
  }

  &.sad .mouth {
    border-top-color: #d9bb62;
    top: 58%;
  }
}

.eyebrow {
  position: absolute;
  height: 16%;
  width: 20%;
  border-radius: 50%;
  border: 5px solid transparent;
  box-sizing: border-box;
  border-top-color: #d9bb62;
  top: 22%;

  &.left {
    left: 22.5%;
  }

  &.right {
    right: 22.5%;
  }
}

.eye {
  position: absolute;
  width: 9.8%;
  height: 10%;
  background: #d9bb62;
  top: 34%;
  border-radius: 50%;

  &.left {
    left: 27.5%;
  }

  &.right {
    right: 27.5%;
  }
}

.mouth {
  position: absolute;
  width: 65%;
  height: 66%;
  border: 6px solid transparent;
  left: 17%;
  box-sizing: border-box;
  border-radius: 50%;
}
</style>
