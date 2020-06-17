<template>
  <div>
    {{ video.snippet.title }}
    <img
      v-bind:src="video.snippet.thumbnails.default.url"
      alt="video"
      @click="changeVideo"
    />
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: Object
  },
  methods: {
    changeVideo() {
      this.$emit("changeVideo", this.video);
    }
  }
};
</script>

<style>
</style>