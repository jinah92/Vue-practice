<template
  ><div>
    <h1>{{ title }}</h1>
    <div v-for="image in images" :key="image.id">
      <img v-bind:src="image.url" alt="cat image" width="500" height="500" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CatImage",
  data() {
    return {
      title: "Cat Image Generator",
      images: [],
    };
  },
  methods: {},
};
</script>

<style></style>
