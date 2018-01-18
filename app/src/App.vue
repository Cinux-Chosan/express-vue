<template>
  <div id="app">
    <!-- <common-header></common-header> -->
    <router-view/>
    <!-- <common-footer></common-footer> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body{
  height: 100%;
  background: #f5f5d5;
}
</style>
