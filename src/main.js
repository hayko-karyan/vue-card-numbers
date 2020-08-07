import Vue from 'vue'
import App from './App.vue'
import store from './store/vuex'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
