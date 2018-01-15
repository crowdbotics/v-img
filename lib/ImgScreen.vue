<template>
  <!-- FORMAT THIS FILE ONCE vetur WILL ADD prettier-eslint support for vscode! :) -->
  <!--
    hate these double quotes in script section but I'm too lazy to change default
    prettier settings since I'm using prettier-eslint
   -->
  <transition appear name="v-img-fade">
    <div v-if="!closed" class="fullscreen-v-img" @click.self="close">
      <!--
        Count of total images in array and current position.
        We're showing wrapper element of this counter just to
        position other elements with flex, space-between
      -->
      <div class="header-v-img">
        <span class="count-v-img">
          <span v-if="images.length > 1">
            {{ currentImageIndex + 1 }}/{{ images.length }}
          </span>
        </span>
        <span class="title-v-img">
          {{ titles[currentImageIndex] }}
        </span>
        <div class="buttons-v-img">
          <span v-if="sourceButtons[currentImageIndex]">
            <a :href="images[currentImageIndex]" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 475.078 475.077" style="enable-background:new 0 0 475.078 475.077;" xml:space="preserve">
                <path d="M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z" fill="#FFFFFF" />
                <path d="M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z" fill="#FFFFFF" />
              </svg>
            </a>
          </span>
          <span @click="close">
            &times;
          </span>
        </div>
      </div>

      <!-- Controls start -->
      <transition appear name="v-img-fade">
        <span v-if="visibleUI && images.length !== 1" class="prev-v-img" @click="prev">
          <svg width="25" height="25" viewBox="0 0 1792 1915" xmlns="http://www.w3.org/2000/svg">
            <path d="M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z" fill="#fff" />
          </svg>
        </span>
      </transition>
      <transition appear name="v-img-fade">
        <span v-if="visibleUI && images.length !== 1" class="next-v-img" @click="next">
          <svg width="25" height="25" viewBox="0 0 1792 1915" xmlns="http://www.w3.org/2000/svg">
            <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" fill="#fff" />
          </svg>
        </span>
      </transition>
      <!-- Constols end -->

      <div class="footer-v-img" v-if="thumbnails && images.length > 1">
        <img
          v-for="(thumbnail, index) in images"
          :key="index"
          :src="thumbnail"
          @click="select(index)"
          :class="{'is-selected': currentImageIndex == index}">
      </div>

      <div class="content-v-img">
        <img :src="images[currentImageIndex]" @click="next">
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      titles: [],
      sourceButtons: [],
      visibleUI: true,
      currentImageIndex: 0,
      closed: true,
      uiTimeout: null,
      handlers: {},
      thumbnails: false,
    };
  },
  watch: {
    closed(newVal) {
      if (newVal && this.handlers.closed) {
        this.handlers.closed();
      }
      if (!newVal && this.handlers.opened) {
        this.handlers.opened();
      }
    },
  },
  methods: {
    // Not using currentImageIndex watcher because it will
    // fire on all cases when opened not first image and
    // index should be changed in order to show clicked image
    // in the image set.
    fireChangeEvent() {
      if (this.handlers.changed) {
        this.handlers.changed(this.currentImageIndex);
      }
    },
    close() {
      if (!this.closed) {
        document.querySelector('body').classList.remove('body-fs-v-img');
        this.images = [];
        this.currentImageIndex = 0;
        this.closed = true;
      }
    },
    next() {
      if (!this.closed && this.images.length > 1) {
        // if next index not exists in array of images, set index to first element
        if (this.currentImageIndex + 1 < this.images.length) {
          this.currentImageIndex++;
        } else {
          this.currentImageIndex = 0;
        }
        this.fireChangeEvent();
      }
    },
    select(selectedImage) {
      this.currentImageIndex = selectedImage;
    },
    prev() {
      if (!this.closed && this.images.length > 1) {
        // if prev index not exists in array of images, set index to last element
        if (this.currentImageIndex > 0) {
          this.currentImageIndex--;
        } else {
          this.currentImageIndex = this.images.length - 1;
        }
        this.fireChangeEvent();
      }
    },
    showUI() {
      if (!this.closed) {
        // UI's hidden, we reveal it for some time only on mouse move and
        // ImageScreen appear
        clearTimeout(this.uiTimeout);
        this.visibleUI = true;
        this.uiTimeout = setTimeout(() => {
          this.visibleUI = false;
        }, 3500);
      }
    },
  },
  created() {
    window.addEventListener('keyup', e => {
      // esc key and 'q' for quit
      if (e.keyCode === 27 || e.keyCode === 81) this.close();
      // arrow right and 'l' key (vim-like binding)
      if (e.keyCode === 39 || e.keyCode === 76) this.next();
      // arrow left and 'h' key (vim-like binding)
      if (e.keyCode === 37 || e.keyCode === 72) this.prev();
    });
    window.addEventListener('scroll', () => {
      this.close();
    });
    window.addEventListener('mousemove', () => {
      this.showUI();
    });
  },
};
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.fullscreen-v-img {
  z-index: 9999;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  -ms-touch-action: none;
  touch-action: none;
}

.content-v-img img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.header-v-img,
.footer-v-img {
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 50px;
  z-index: 9999;
  display: flex;
  align-items: center;
}

.header-v-img {
  justify-content: space-between;
}

.footer-v-img {
  bottom: 0;
  justify-content: center;
  height: 70px;
  /* scrolling thumbnails on mobile */
  overflow-x: auto;
}

.footer-v-img img {
  width: 60px;
  height: 60px;
  cursor: pointer;
  -webkit-transition: transform 0.2s ease-out;
  transition: transform 0.2s ease-out;
  object-fit: cover;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.footer-v-img img.is-selected {
  transform: scale(1.1);
}

.footer-v-img img:not(:last-child) {
  margin-right: 7px;
}

.title-v-img {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: white;
  text-align: center;
  max-height: 100%;
  overflow: auto;
}

.count-v-img,
.buttons-v-img {
  width: 80px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.count-v-img {
  font-size: 15px;
  color: white;
  margin-left: 10px;
}

.buttons-v-img {
  margin-right: 10px;
  text-align: right;
}

.buttons-v-img span path {
  fill: #e5e6eb;
  -webkit-transition: fill 0.4s ease-in-out;
  transition: fill 0.4s ease-in-out;
}

.buttons-v-img span {
  cursor: pointer;
  color: #e5e6eb;
  font-size: 30px;
  -webkit-transition: color 0.4s ease-in-out;
  transition: color 0.4s ease-in-out;
  text-decoration: none;
  text-align: center;
}

.buttons-v-img span:not(:last-child) {
  margin-right: 8px;
}

.buttons-v-img span svg {
  height: 20px;
  width: 15px;
}

.buttons-v-img span:hover svg path {
  fill: white;
}

.buttons-v-img span:hover {
  color: white;
}

.prev-v-img svg,
.next-v-img svg {
  margin: 5px auto;
}

.prev-v-img,
.next-v-img {
  color: white;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  margin-top: -12.5px;
  font-size: 15px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: 0.3;
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}

.prev-v-img:hover,
.next-v-img:hover {
  opacity: 1;
}

.prev-v-img {
  left: 10px;
}

.next-v-img {
  right: 10px;
}

.v-img-fade-enter,
.v-img-fade-leave-to {
  opacity: 0;
}

.v-img-fade-enter-active,
.v-img-fade-leave-active {
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
}
</style>
