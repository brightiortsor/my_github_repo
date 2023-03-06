<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <AllRepos />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AllRepos from "./components/AllRepos.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    AllRepos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
