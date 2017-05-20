import Vue from 'vue'
import App from './App.vue'
import VueImg from '../../dist/v-img.js'

Vue.use(VueImg);

new Vue({
  el: '#app',
  render: h => h(App)
})
