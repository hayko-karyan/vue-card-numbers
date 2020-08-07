<template>
  <div class="main">
    <mainHeader></mainHeader>
    <mainBody></mainBody>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import mainHeader from "./header/main-header.vue";
import mainBody from "./body/main-body.vue";
import mainFooter from "./footer/main-footer.vue";

export default {
  components: {
    mainHeader,mainBody,mainFooter
  },
};
</script>

<style scoped>
.main {
  min-width: 80%;
  height: 100vh;
  background-color: black;
}
</style>