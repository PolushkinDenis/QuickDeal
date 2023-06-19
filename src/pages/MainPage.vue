<template>
    <div>
      <main class="mainPage">
        <img src="../assets/main.png" />
        <h1>Manage your task, quickly.</h1>
      </main>
      <div class="main_footer">
        <router-link to="tasks">
          <div class="arrow-1">
            <div></div></div
        ></router-link>
      </div>
    </div>
  </template>
  
  <script lang="ts" >
  import { defineComponent } from "vue";
  
  export default defineComponent({});
  </script>
  
  <style lang="scss">
  .mainPage {
    min-height: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;
    img {
      max-width: 500px;
      margin-top: 5%;
    }
    h1 {
      margin-top: 3%;
      color: #6368d9;
    }
  }
  .main_footer {
    position: absolute;
    bottom: 0;
    right:0;
    .arrow-1 {
      cursor: pointer;
      position: relative;
      width: 80px;
      height: 50px;
      margin: 20px;
    }
    .arrow-1 div {
      position: relative;
      top: 20px;
      width: 50px;
      height: 10px;
      background-color: #6368d9;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
      left: 0;
      display: block;
    }
    .arrow-1 div::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 10px;
      top: -11px;
      right: -8px;
      background-color: #6368d9;
      transform: rotate(45deg);
    }
    .arrow-1 div::before {
      content: "";
      position: absolute;
      width: 40px;
      height: 10px;
      top: 11px;
      right: -8px;
      background-color: #6368d9;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
      transform: rotate(-45deg);
    }
  }
  </style>
  