<template>
  <div id="app">
    <HelloWorld msg="Welcome to Blockchain App" />
    <!-- 3. component를 템플릿에 추가 -->
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//1. TodoList.vue를 import 한다.
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    //2. component를 등록한다.
    HelloWorld,
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, content: "Vue js 복습", isCompleted: false },
        { id: 2, content: "js 복습", isCompleted: false },
        { id: 3, content: "React 복습", isCompleted: false },
        { id: 4, content: "알고리즘 복습", isCompleted: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
