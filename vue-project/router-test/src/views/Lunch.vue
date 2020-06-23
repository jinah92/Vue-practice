<template>
  <div>
    <h1>점심 메뉴 추천</h1>
    <button @click="pick">메뉴 고르기</button>
    <div>{{ choice }}</div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Launch",
  data() {
    return {
      choice: "",
      menu: ["노랑통닭", "소풍", "김밥카페", "양자강", "순남시래기"],
    };
  },
  methods: {
    pick() {
      this.choice = _.sample(this.menu);
    },
  },
};
</script>

<style></style>
