/* eslint-disable no-undef */
/* eslint-disable no-console */

import ImgScreen from './ImgScreen.vue';

const addPluginAttributes = (el, binding, options) => {
  // Defaults
  let cursor = 'pointer';
  let src = el.src; // eslint-disable-line prefer-destructuring
  let group = binding.arg || null;
  let title;
  const events = {};

  if (options.altAsTitle) title = el.alt;

  // Overriding options if they're provided in binding.value
  if (typeof binding.value !== 'undefined') {
    cursor = binding.value.cursor || cursor;
    src = binding.value.src || src;
    group = binding.value.group || group;
    title = binding.value.title || title;
    events.opened = binding.value.opened;
    events.closed = binding.value.closed;
    events.changed = binding.value.changed;
  }

  // Setting up data attributes for groups of images
  el.setAttribute('data-vue-img-group', group || '');
  el.setAttribute('data-vue-img-src', src);
  el.setAttribute('data-vue-img-title', title || '');

  if (!src) console.error('v-img element missing src parameter.');

  // Applying options
  el.style.cursor = cursor; // eslint-disable-line no-param-reassign

  return {
    cursor,
    src,
    group,
    title,
    events,
  };
};

const install = (Vue, options) => {
  const Screen = Vue.extend(ImgScreen);

  const defaultOptions = {
    altAsTitle: false,
  };

  // eslint-disable-next-line no-param-reassign
  options = Object.assign(defaultOptions, options);

  Vue.directive('img', {
    update(el, binding, vnode, oldVnode) {
      const srcUpdated = oldVnode.data.attrs.src !== vnode.data.attrs.src;
      const bindingValueUpdated = binding.oldValue !== binding.value;

      let altUpdated = false;
      // handle alt tag change only if option is enabled
      if (options.altAsTitle) {
        altUpdated = oldVnode.data.attrs.alt !== vnode.data.attrs.alt;
      }

      if (srcUpdated || altUpdated || bindingValueUpdated) {
        addPluginAttributes(el, binding, options);
      }
    },

    bind(el, binding) {
      // Don't pass anything that could be dynamic from addedAttributes
      // object to vm.
      const addedAttributes = addPluginAttributes(el, binding, options);

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

        const images = [
          ...document.querySelectorAll(`img[data-vue-img-group="${el.dataset.vueImgGroup}"]`),
        ];
        if (images.length === 0) {
          Vue.set(vm, 'images', [src]);
          Vue.set(vm, 'titles', [title]);
        } else {
          Vue.set(vm, 'images', images.map(e => e.dataset.vueImgSrc));
          Vue.set(vm, 'titles', images.map(e => e.dataset.vueImgTitle));
          Vue.set(vm, 'currentImageIndex', images.indexOf(el));
        }
        Vue.set(vm, 'handlers', addedAttributes.events);
        Vue.set(vm, 'closed', false);
      });
    },
  });
};

export default install;
