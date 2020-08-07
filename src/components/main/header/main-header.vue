<template>
  <div>
    <div class="add">
      <mainHeaderAdd></mainHeaderAdd>
      <mainHeaderSort></mainHeaderSort>
    </div>
  </div>
</template>

<script>
import mainHeaderAdd from "./main-header-add.vue";
import mainHeaderSort from "./main-header-sort.vue";


export default {
  components: {
    mainHeaderAdd,mainHeaderSort
  },
};
</script>

<style scoped>
.add {
  width: 100%;
  height: 10vh;
  margin: 0;
  padding: 0;
  background-color: chocolate;
  display: flex;
  align-items: center;
}
</style>