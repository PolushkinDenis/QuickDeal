<template>
    <main class="taskPage">
      <h2 class="h2-newTask">Новая задача</h2>
      <TaskForm @addTask="addTask" />
      <h1>Список задач</h1>
      <div>
        <Tasks
          v-for="task in $store.getters.getTasks"
          :task="task"
          :key="task.id"
        />
      </div>
    </main>
  </template>
  
  <script lang:="ts">
  import Tasks from "@/components/tasks/Tasks.vue";
  import TaskForm from "@/components/tasks/TaskForm.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    components: {
      TaskForm,
      Tasks,
    },
    beforeCreate() {
      this.$store.commit("setTasks");
    },
    methods: {
      addTask(task) {
        this.$store.commit("addTasks", task);
      },
    },
  });
  </script>
  
  <style lang="scss">
  .taskPage {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5px;
    h1, .h2-newTask {
      margin-top: 5%;
      color: #6368d9;
    }
    .btn {
      width: 250px;
      background: #6368d9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      color: #ffffff;
      height: 50px;
      border: none;
    }
  }
  </style>