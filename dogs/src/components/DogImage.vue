<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="getDog">강아지 이미지 가져오기</button>
    <div v-for="image in images" :key="image.id">
      <img v-bind:src="image.url" alt="dog image" width="500" height="500" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DogImage",
  data() {
    return {
      title: "Dog Image Generator",
      images: [],
    };
  },
  methods: {
    getDog() {
      // 1. dog.ceo API에 요청을 보내어 JSON 응답 받아
      // 2. image url를 가져와
      // 3. <img src="">로 넣어주기
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => this.images.push({ id: Date.now(), url: response.data.message }))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
