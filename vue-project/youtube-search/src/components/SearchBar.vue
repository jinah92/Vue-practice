<template>
  <div>
    <input v-model="userInput" @keypress.enter="onInput" type="text" class="form-control" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      userInput: ""
    };
  },
  methods: {
    onInput() {
      //App.vue(부모)에게 $emit을 통해 userInput을 전달하는 함수
      this.$emit("onInput", this.userInput);
    }
  }
};
</script>

<style></style>
