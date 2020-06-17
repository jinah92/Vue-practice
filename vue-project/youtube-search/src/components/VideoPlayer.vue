<template>
  <div v-if="videos" class="embed-responsive embed-responsive-16by9">
    <iframe
      class="embed-responsive-item"
      :src="`https://www.youtube.com/embed/${videos.id.videoId}`"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: { videos: Object }
};
</script>

<style>
</style>