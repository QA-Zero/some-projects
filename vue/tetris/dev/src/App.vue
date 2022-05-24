<template>
  <div id="app">
    <Main />
  </div>
</template>


<script>

import Main from './components/Main.vue'

export default {
  name: 'App',
  components: { Main }
}
</script>


<style lang="scss">

body {
  height: 100vh;
  margin: 0;
}

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-overlay-dialog {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-dialog {
      margin: 0;
    }
  }
}
</style>
