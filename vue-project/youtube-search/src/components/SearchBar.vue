<template>
  <div>
    <input v-model="userInput" @keypress.enter="onInput" type="text" class="form-control" />
    <p>{{ $store.state.userInput }}</p>
    <iframe
      class="embed-responsive-item"
      :src="`https://www.youtube.com/embed/${videos.id.videoId}`"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    onInput() {
      //App.vue(부모)에게 $emit을 통해 userInput을 전달하는 함수
      this.$emit("onInput", this.userInput);
      this.$store.state.userInput = this.userInput;
      // Vuex store에 data를 변경
      console.log("vuex data : " + this.$store.state.userInput);
    },
  },
};
</script>

<style></style>
