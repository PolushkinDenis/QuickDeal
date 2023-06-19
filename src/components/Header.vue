<template>
    <header>
      <div class="content">
        <button><router-link to="/">Главная</router-link></button>
        <button><router-link to="tasks">Список задач</router-link></button>
      </div>
    </header>
  </template>
  
  <style lang="scss">
  header {
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #6369d9;
    .content {
      max-width: 1140px;
      margin: 0 auto;
      button {
        height: 40px;
        background: none;
        border: none;
        a {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
  </style>