<template>
  <div id="app">
    <h1>이것은 App.vue 이다.</h1>
    <DogImage />
    <CatImage />
  </div>
</template>

<script>
import DogImage from "./components/DogImage.vue";
import CatImage from "./components/CatImage.vue";

export default {
  name: "App",
  components: {
    DogImage,
    CatImage,
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
