<template>
  <div class="card">
    <header class="header">
      <button class="x" @click="close(i)">X</button>
    </header>
    <p class="value">{{ val }}</p>
  </div>
</template>

<script>
export default {
  props: {
    val: { type: Number, default: 0 },
    i: {type: Number}
  },
  methods: {
    close(p) {
      this.$store.dispatch('closeCard',p)
    },
  },
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 150px;
  background-color: purple;
  margin: 20px;
}
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 90%;
}
.x {
  cursor: pointer;
  background-color: red;
  border-radius: 50%;
  border: none;
  font-size: 1em;
}
.value {
  text-align: center;
  font-size: 3em;
  margin: 0;
}
</style>
