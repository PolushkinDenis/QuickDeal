<template>
    <section class="task">
      <div class="task__content">
        <h2 v-if="!changeState">{{ task?.title }}</h2>
        <input v-else placeholder="Название" class="task-input input-title" v-model="newTitle" />
        <div v-if="!changeState" class="task__content-discription">{{ task?.task }}</div>
        <input v-else placeholder="Задача" class="task-input" v-model="newTask" />
        <div class="content__btns">
          <button v-if="!changeState" @click="changeStateData">Изменить</button>
          <button v-else @click="changeTask">Сохранить</button>
          <button @click="deleteTask">Удалить</button>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { PropType, defineComponent } from "vue";
  import { ITask } from "@/types/task";
  
  export default defineComponent({
    props: {
      task: {
        type: Object as PropType<ITask>,
        require: true,
      },
    },
    data: function () {
      return {
        changeState: false,
        newTitle: this.task?.title,
        newTask: this.task?.task,
        id: this.task?.id,
      };
    },
    methods: {
      deleteTask() {
        this.$store.commit("delete", this.task?.id);
      },
      changeStateData() {
        this.changeState = !this.changeState
      },
      changeTask() {
        if (this.id && this.newTask && this.newTitle) {
          const newTask: ITask = {
            id: this.id,
            title: this.newTitle,
            task: this.newTask,
          };
          this.$store.commit("changeTask", newTask);
          this.changeState = !this.changeState
        }
      },
    },
  });
  </script>
  <style lang="scss">
  .task {
    min-height: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .task__content {
      min-width: 300px;
      background: #6368d9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding: 3%;
      color: #fff;
      h2 {
        text-align: center;
      }
      .task__content-discription {
        margin: 5% 0;
      }
      .content__btns {
        display: flex;
        margin-top: 4%;
        justify-content: space-around;
        button {
          width: 140px;
          height: 40px;
          background: #d1d0f9;
          border: none;
          border-radius: 30px;
          color: #6368d9;
          font-weight: 500;
          line-height: 15px;
        }
      }
    }
    .task-input { 
      height: 40px;
      border: 1px solid #6368d9;
      border-radius: 20px;
      padding: 0 5%;
      outline: none;
      color: #6368d9;
      &::placeholder {
        color: #6368d9;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  </style>