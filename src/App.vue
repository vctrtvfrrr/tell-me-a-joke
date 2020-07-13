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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Special+Elite");

body {
  margin: 0;
  padding: 0;
  color: #b8bcc4;
  background: #282c34;
  font-family: "Special Elite", cursive;
}

a {
  color: #b8bcc4;

  &:focus,
  &:hover {
    color: #e8ecf4;
  }
}

.overall {
  width: 100vw;
  height: 100vh;
}
</style>
