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
  let thumbnails;
  const events = {};

  if (options.altAsTitle) title = el.alt;

  /* eslint-disable prefer-destructuring */
  // Assigning values from plugin initialization options here
  openOn = options.openOn;
  sourceButton = options.sourceButton;
  thumbnails = options.thumbnails;
  /* eslint-enable prefer-destructuring */

  // Overriding options if they're provided in binding.value
  if (typeof binding.value !== 'undefined') {
    cursor = binding.value.cursor || cursor;
    group = binding.value.group || group;
    openOn = binding.value.openOn || openOn;
    src = binding.value.src || src;
    title = binding.value.title || title;
    // Lifecycle functions
    events.opened = binding.value.opened;
    events.closed = binding.value.closed;
    events.changed = binding.value.changed;
    // binding.value.sourceButton could be set to false, (part before || will always be ignored)
    // that's why we're comparing it to undefined but not using approach
    // as in src, group, title, etc.
    if (binding.value.sourceButton !== undefined) {
      sourceButton = binding.value.sourceButton; // eslint-disable-line prefer-destructuring
    }
    // same as above
    if (binding.value.thumbnails !== undefined) {
      thumbnails = binding.value.thumbnails; // eslint-disable-line prefer-destructuring
    }
  }

  // Setting up data attributes for dynamic properties
  el.setAttribute('data-vue-img-src', src);

  if (group) el.setAttribute('data-vue-img-group', group);
  if (title) el.setAttribute('data-vue-img-title', title);
  if (sourceButton) el.setAttribute('data-vue-img-source-button', sourceButton);
  if (thumbnails) el.setAttribute('data-vue-img-thumbnails', thumbnails);

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
    thumbnails,
  };
};

const install = (Vue, options) => {
  const Screen = Vue.extend(ImgScreen);

  const defaultOptions = {
    altAsTitle: false,
    sourceButton: false,
    thumbnails: false,
    openOn: 'click',
  };

  // eslint-disable-next-line no-param-reassign
  options = Object.assign(defaultOptions, options);

  Vue.directive('img', {
    update(el, binding, vnode, oldVnode) {
      let altUpdated;
      let srcUpdated;

      if (oldVnode.data.attrs && vnode.data.attrs) {
        srcUpdated = oldVnode.data.attrs.src !== vnode.data.attrs.src;
        // handle alt tag change only if option altAsTitle is enabled
        if (options.altAsTitle) {
          altUpdated = oldVnode.data.attrs.alt !== vnode.data.attrs.alt;
        }
      }

      const bindingValueUpdated = binding.oldValue !== binding.value;

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
        Vue.set(vm, 'thumbnails', el.dataset.vueImgThumbnails === 'true');
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
