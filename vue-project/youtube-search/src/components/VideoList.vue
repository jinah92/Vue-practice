<template>
  <ul>
    <li class="list-group" v-for="video in videos" v-bind:key="video.id.videoId">
      <VideoItem class="list-group-item" :video="video" @changeVideo="changeVideo" />
    </li>
  </ul>
</template>

<script>
import VideoItem from "./VideoItem";

export default {
  name: "VideoList",
  components: {
    VideoItem
  },
  props: {
    videos: Array
  },
  methods: {
    changeVideo(video) {
      this.$emit("changeVideo", video);
    }
  }
};
</script>

<style>
</style>