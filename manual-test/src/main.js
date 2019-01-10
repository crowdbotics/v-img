import Vue from 'vue';
import App from './App.vue';
import VueImg from '../../dist/v-img';

Vue.use(VueImg, {
  altAsTitle: true,
  sourceButton: false,
  thumbnails: true,
  closeOnScroll: false,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
