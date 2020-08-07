<template>
  <div class="main-body">
      <mainBodyContent></mainBodyContent>
      <mainBodyScrollbar></mainBodyScrollbar>
  </div>
</template>

<script>
import mainBodyContent from "./main-body-content.vue";
import mainBodyScrollbar from "./main-body-scrollbar.vue";

export default {
    components: {
        mainBodyScrollbar,mainBodyContent
    }
}
</script>

<style scoped>
    .main-body {
        width: 100%;
        display: flex;
    }
</style>
