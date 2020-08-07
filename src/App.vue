<template>
  <div id="app">
    <mains></mains>
    <instructions></instructions>
  </div>
</template>

<script>
import mains from './components/main/main.vue'
import instructions from './components/instructions.vue'

export default {
  name: 'App',
  components: {
    mains,
    instructions,
  },
};
</script>

<style>
  #app {
    display: flex;
  }
</style>
