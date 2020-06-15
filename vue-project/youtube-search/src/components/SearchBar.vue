<template>
  <div>
    <input v-model="content" @keypress.enter="input" type="text" />
    <div v-if="resultArray.length > 0">
      <iframe
        v-bind:src="`https://www.youtube.com/embed/${resultArray[0].id.videoId}`"
        frameborder="0"
      ></iframe>
    </div>
    <ul>
      <li v-for="result in resultArray" v-bind:key="result.id.videoId">
        {{ result.snippet.title }}
        <img v-bind:src="result.snippet.thumbnails.default.url" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchBar",
  data() {
    return {
      content: "",
      resultArray: [],
    };
  },
  methods: {
    input() {
      //1. 입력된 검색어를 가지고,
      const baseURL = "https://www.googleapis.com/youtube/v3/search";
      const API_KEY = process.env.VUE_APP_UTUBE_API_KEY;
      //2. Youtube API에 요청을 보내어,
      axios
        .get(baseURL, {
          params: {
            //kew, part, q
            key: API_KEY,
            part: "snippet",
            type: "video",
            q: this.content,
            maxResults: 10,
          },
        })
        .then((response) => {
          this.resultArray = response.data.items;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      //3. 검색어로 검색한 결과를 가져옴.
      console.log("검색어 입력");
    },
  },
};
</script>

<style></style>
