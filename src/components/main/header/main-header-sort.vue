<template>
  <button class="sortbtn" @click="sort">Sort</button>
</template>

<script>
export default {
  methods: {
    sort() {
      this.$store.dispatch("toSort")
    }
  }
};
</script>

<style scoped>
.sortbtn {
  width: 10%;
  height: 35px;
  cursor: pointer;
  border: 2px solid black;
  background-color: red;
}
</style>>

