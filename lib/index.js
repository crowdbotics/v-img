/* eslint-disable no-undef */
/* eslint-disable no-console */

import ImgScreen from './ImgScreen.vue';

const addPluginAttributes = (el, binding, options) => {
  // Defaults
  let cursor = 'pointer';
  let group = binding.arg || null;
  let openOn;
  let sourceButton;
  let src = el.src; // eslint-disable-line prefer-destructuring
  let title;
  const events = {};

  if (options.altAsTitle) title = el.alt;
  openOn = options.openOn; // eslint-disable-line prefer-destructuring
  sourceButton = options.sourceButton; // eslint-disable-line prefer-destructuring

  // Overriding options if they're provided in binding.value
  if (typeof binding.value !== 'undefined') {
    cursor = binding.value.cursor || cursor;
    group = binding.value.group || group;
    openOn = binding.value.openOn || openOn;
    src = binding.value.src || src;
    title = binding.value.title || title;
    // binding.value.sourceButton could be set to false, that's why we're
    // comparing it to undefined but not using approach as in src, group, title, etc.
    if (binding.value.sourceButton !== undefined) {
      sourceButton = binding.value.sourceButton; // eslint-disable-line prefer-destructuring
    }
    events.opened = binding.value.opened;
    events.closed = binding.value.closed;
    events.changed = binding.value.changed;
  }

  // Setting up data attributes for dynamic properties
  el.setAttribute('data-vue-img-src', src);

  if (group) el.setAttribute('data-vue-img-group', group);
  if (title) el.setAttribute('data-vue-img-title', title);
  if (sourceButton) el.setAttribute('data-vue-img-source-button', sourceButton);

  if (!src) console.error('v-img element missing src parameter.');

  // Applying options
  el.style.cursor = cursor; // eslint-disable-line no-param-reassign

  return {
    cursor,
    src,
    group,
    title,
    events,
    sourceButton,
    openOn,
  };
};

const install = (Vue, options) => {
  const Screen = Vue.extend(ImgScreen);

  const defaultOptions = {
    altAsTitle: false,
    sourceButton: false,
    openOn: 'click',
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

      // Updating vm's data
      el.addEventListener(addedAttributes.openOn, () => {
        let images;
        if (!el.dataset.vueImgGroup) {
          images = [el];
        } else {
          images = [
            ...document.querySelectorAll(`img[data-vue-img-group="${el.dataset.vueImgGroup}"]`),
          ];
        }
        Vue.set(vm, 'images', images.map(e => e.dataset.vueImgSrc));
        Vue.set(vm, 'titles', images.map(e => e.dataset.vueImgTitle));
        Vue.set(vm, 'sourceButtons', images.map(e => e.dataset.vueImgSourceButton === 'true'));
        Vue.set(vm, 'currentImageIndex', images.indexOf(el));
        Vue.set(vm, 'handlers', addedAttributes.events);
        Vue.set(vm, 'closed', false);
      });
    },
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;
