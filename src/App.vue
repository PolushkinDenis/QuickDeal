<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
  
});
</script>

<style lang="scss">
*{
  margin: 0;
}
</style>
