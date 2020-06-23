<template>
  <div id="app">
    <div class="text-center">
      <h1>Youtube Search</h1>
      <SearchBar @onInput="getVideos" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-9">
          <VideoPlayer :videos="selectedVideo" />
        </div>
        <div class="col-3">
          <VideoList :videos="videos" @changeVideo="changeVideo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import axios from "axios";
export default {
  name: "App",
  components: {
    SearchBar,
    VideoPlayer,
    VideoList,
  },
  methods: {
    changeVideo(video) {
      this.selectedVideo = video;
      console.log(video);
    },
    getVideos(userInput) {
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
            q: userInput,
            maxResults: 10,
          },
        })
        .then((response) => {
          this.videos = response.data.items;
          console.log(this.videos);
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
