<template>
  <section class="taskForm">
    <form @submit.prevent="addTask">
      <input placeholder="Название" v-model="title" />
      <input placeholder="Задача" v-model="task" />
      <button class="btn" type="submit">Добавить</button>
    </form>
  </section>
</template>
  
  <script lang="ts">
import { ITask } from "@/types/task";
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    title: "",
    task: "",
  }),
  methods: {
    addTask() {
      if (this.title && this.task) {
        let newTask: ITask = {
          id: Date.now(),
          title: this.title,
          task: this.task,
        };
        this.$emit("addTask", newTask);
        this.title = "";
        this.task = "";
      }
    },
  },
});
</script>
  
  <style lang="scss">
.taskForm {
  min-height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    align-items: center;
    input {
      min-width: 250px;
      height: 50px;
      margin-bottom: 5%;
      background: #d1d0f9;
      border: none;
      padding: 0 5%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      color: #6368d9;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      outline: none;
      &::placeholder {
        color: #6368d9;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
</style>