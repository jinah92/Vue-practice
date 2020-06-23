<template>
  <div>
    <h1>Todo List</h1>
    <input @keypress.enter="addTodo" v-model="inputContent" type="text" />
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        <input type="checkbox" v-model="todo.isCompleted" />
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
export default {
  name: "Todos",
  data() {
    return {
      inputContent: "",
      todos: []
    };
  },
  created() {
    this.gettodos();
  },
  methods: {
    gettodos() {
      // firebase 데이터베이스(firestore)에 요청보내
      db.collection("todos")
        .orderBy("CreatedAt", "desc") //내림차순으로 정렬
        .get()
        .then(response => {
          // 데이터를 받아와
          //todos를 채워넣기
          this.todos = [];
          response.forEach(doc => {
            console.log(doc.data());
            this.todos.push({
              id: doc.id,
              content: doc.data().content,
              isCompleted: doc.data().isCompleted,
              CreatedAt: doc.data().CreatedAt
            });
          });
        });
    },
    addTodo() {
      // enter가 눌러졌을 때, firebase API를 통해 데이터 저장
      db.collection("todos")
        .add({
          content: this.inputContent,
          isCompleted: false,
          CreatedAt: new Date()
        })
        .then(() => {
          // todos를 다시 불러와 새로운 todos로 생성
          this.gettodos();
        });
    }
  }
};
</script>

<style></style>
