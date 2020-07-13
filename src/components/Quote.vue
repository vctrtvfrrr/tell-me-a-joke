<template>
  <blockquote class="blockquote">{{ text }}</blockquote>
</template>

<script>
export default {
  name: "Quote",

  props: {
    // Text that will be displayed
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.blockquote {
  font-family: "Special Elite", cursive;
  font-weight: 100;
  font-size: 1.2rem;
  line-height: 1.4;
  position: relative;
  margin: 0;
  padding: 0.5rem;

  &:before,
  &:after {
    position: absolute;
    color: #f1efe6;
    font-size: 6rem;
    width: 3rem;
    height: 3.4rem;
  }

  &:before {
    content: "“";
    left: -2.8rem;
    top: -1.5rem;
  }

  &:after {
    content: "”";
    right: -2.8rem;
    bottom: -0.8rem;
  }
}

@media (max-width: 768px) {
  .blockquote {
    font-size: 1rem;
    padding: 0;
  }
}
</style>
