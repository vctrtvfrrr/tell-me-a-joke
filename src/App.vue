<template>
  <router-view class="overall" />
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    titleTemplate: null
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #282c34;
  color: #fff;
}

.overall {
  width: 100vw;
  height: 100vh;
}
</style>
