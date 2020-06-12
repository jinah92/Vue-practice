<template
  ><div>
    <h1>{{ title }}</h1>
    <button @click="getCat">고양이 이미지 가져오기</button>
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
  methods: {
    getCat() {
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          this.images.push({ id: Date.now(), url: response.data[0].url });
          //   this.images = response.data[0].url;
          console.log(this.images);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
