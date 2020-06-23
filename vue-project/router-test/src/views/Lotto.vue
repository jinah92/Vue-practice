<template>
  <div>
    <h1>로또</h1>
    <button @click="Pick">번호 뽑기</button>
    <div>{{ choice }}</div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Lotto",
  data() {
    return {
      choice: [],
    };
  },
  methods: {
    Pick() {
      this.choice = _.sampleSize(_.range(1, 46), 6);
    },
  },
};
</script>

<style></style>
