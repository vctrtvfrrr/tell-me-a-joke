<template>
  <div class="loader" />
</template>

<script>
export default {
  name: "LoadingSpinner"
};
</script>

<style lang="scss" scoped>
.loader {
  margin: auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid rgba(217, 187, 98, 0.2);
  border-right: 5px solid rgba(217, 187, 98, 0.2);
  border-bottom: 5px solid rgba(217, 187, 98, 0.2);
  border-left: 5px solid #d9bb62;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load 1.1s infinite linear;
  animation: load 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
