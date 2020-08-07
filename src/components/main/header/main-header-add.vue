<template>
  <button class="addbtn" @click='add()'>Add card</button>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.dispatch('newCard')
    }
  }
}
</script>

<style>
.addbtn {
  width: 10%;
  height: 35px;
  cursor: pointer;
  border: 2px solid black;
  background-color: lime;
  margin: 0 8%;
}
</style>