<template>
  <div class="main-body-content">
    <card v-for="(element, index) in getValues" :i="index" :val='element' :key="element.id"></card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import card from "./card/main-body-card.vue";

export default {
  components: {
    card,
  },
  computed: {
    ...mapGetters(['getValues'])
  }
}
</script>

<style scoped>
.main-body-content {
  width: 97%;
  height: 80vh;
  background-color: saddlebrown;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
}
</style>