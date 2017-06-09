/* eslint-disable no-undef */
/* eslint-disable no-console */

import ImgScreen from './ImgScreen.vue';

const install = Vue => {
  const screen = Vue.extend(ImgScreen);

  Vue.directive('img', {
    bind(el, binding) {
      // Setting up data attributes for groups of images
      el.setAttribute('data-vue-img-group', binding.arg || null);
      if (binding.value && binding.value.src) {
        el.setAttribute('data-vue-img-src', binding.value.src);
      }

      // Defaults
      let cursor = 'pointer';
      let src = el.src;

      // Overriding options if they're provided in binding.value
      if (typeof binding.value !== 'undefined') {
        cursor = binding.value.cursor || cursor;
        src = binding.value.src || src;
      }

      if (!src) console.error('v-img element missing src parameter.');

      // Applying options
      el.style.cursor = cursor;

      // Finding existing vm, or creating new one
      let vm = window.vueImg;
      if (!vm) {
        const element = document.createElement('div');
        element.setAttribute('id', 'imageScreen');
        document.querySelector('body').appendChild(element);
        vm = window.vueImg = new screen().$mount('#imageScreen');
      }

      // Updating vm's data, changin body overflow and position,
      // which will be turn back on close
      el.addEventListener('click', () => {
        document.querySelector('body').classList.add('body-fs-v-img');

        const images = [
          ...document.querySelectorAll(
            `img[data-vue-img-group=${binding.arg}]`
          ),
        ];
        if (images.length == 0) {
          Vue.set(vm, 'images', [src]);
        } else {
          Vue.set(vm, 'images', images.map(e => e.dataset.vueImgSrc || e.src));
          Vue.set(vm, 'currentImageIndex', images.indexOf(el));
        }
        Vue.set(vm, 'closed', false);
      });
    },
  });
};

export default install;
