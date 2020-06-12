<template>
  <div id="app">
    <h1>이것은 App.vue 이다.</h1>
    <Buttons />
    <DogImage />
    <CatImage />
  </div>
</template>

<script>
import DogImage from "./components/DogImage.vue";
import CatImage from "./components/CatImage.vue";
import Buttons from "./components/Buttons.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    DogImage,
    CatImage,
    Buttons,
  },
  data() {
    return {
      catImages: [],
      dogImages: [],
    };
  },
  methods: {
    getDog() {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => this.images.push({ id: Date.now(), url: response.data.message }))
        .catch((err) => console.log(err));
    },
    getCat() {
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          this.images.push({ id: Date.now(), url: response.data[0].url }); // this.images = response.data[0].url;
          console.log(this.images);
        })
        .catch((err) => console.log(err));
    },
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
