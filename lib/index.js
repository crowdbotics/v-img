/* eslint-disable no-undef */
/* eslint-disable no-console */

import ImgScreen from './ImgScreen.vue';

const install = (Vue, options) => {
  const Screen = Vue.extend(ImgScreen);

  const defaultOptions = {
    altAsTitle: false,
  };

  // eslint-disable-next-line no-param-reassign
  options = Object.assign(defaultOptions, options);

  Vue.directive('img', {
    bind(el, binding) {
      // Defaults
      let cursor = 'pointer';
      let src = el.src; // eslint-disable-line prefer-destructuring
      let group = binding.arg || null;
      let title;

      if (options.altAsTitle) title = el.alt;

      // Overriding options if they're provided in binding.value
      if (typeof binding.value !== 'undefined') {
        cursor = binding.value.cursor || cursor;
        src = binding.value.src || src;
        group = binding.value.group || group;
        title = binding.value.title || title;
      }

      // Setting up data attributes for groups of images
      el.setAttribute('data-vue-img-group', group || '');
      el.setAttribute('data-vue-img-src', src);
      el.setAttribute('data-vue-img-title', title || '');

      if (!src) console.error('v-img element missing src parameter.');

      // Applying options
      el.style.cursor = cursor; // eslint-disable-line no-param-reassign

      // Finding existing vm, or creating new one
      let vm = window.vueImg;
      if (!vm) {
        const element = document.createElement('div');
        element.setAttribute('id', 'imageScreen');
        document.querySelector('body').appendChild(element);
        // eslint-disable-next-line no-multi-assign
        vm = window.vueImg = new Screen().$mount('#imageScreen');
      }

      // Updating vm's data, changin body overflow and position,
      // which will be turn back on close
      el.addEventListener('click', () => {
        document.querySelector('body').classList.add('body-fs-v-img');

        const images = [...document.querySelectorAll(`img[data-vue-img-group="${group}"]`)];
        if (images.length === 0) {
          Vue.set(vm, 'images', [src]);
          Vue.set(vm, 'titles', [title]);
        } else {
          Vue.set(vm, 'images', images.map(e => e.src));
          Vue.set(vm, 'titles', images.map(e => e.dataset.vueImgTitle));
          Vue.set(vm, 'currentImageIndex', images.indexOf(el));
        }
        Vue.set(vm, 'closed', false);
      });
    },
  });
};

export default install;
