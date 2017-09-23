<template>
  <transition appear
    name="v-img-fade">
    <div v-if="!closed"
      class='fullscreen-v-img'
      @click.self="close()">
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
        <span class="close-v-img"
          @click="close">
          &times;
        </span>
      </div>
      <!-- Controls start -->
      <transition appear
        name="v-img-fade">
        <span v-if="visibleUI && images.length !== 1"
          class="prev-v-img"
          @click="prev">
          <svg width="25"
            height="25"
            viewBox="0 0 1792 1915"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z"
              fill="#fff" />
          </svg>
        </span>
      </transition>
      <transition appear
        name="v-img-fade">
        <span v-if="visibleUI && images.length !== 1"
          class="next-v-img"
          @click="next">
          <svg width="25"
            height="25"
            viewBox="0 0 1792 1915"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"
              fill="#fff" />
          </svg>
        </span>
      </transition>
      <!-- Constols end -->

      <div class="content-v-img">
        <img :src="images[currentImageIndex]"
          @click="next">
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
      visibleUI: true,
      currentImageIndex: 0,
      closed: true,
      uiTimeout: null,
      handlers: {}
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
        };
        this.fireChangeEvent();
      }
    },
    prev() {
      if (!this.closed && this.images.length > 1) {
        // if prev index not exists in array of images, set index to last element
        if (this.currentImageIndex > 0) {
          this.currentImageIndex--;
        } else {
          this.currentImageIndex = this.images.length - 1;
        };
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
          this.visibleUI = false
        }, 3500);
      }
    },
  },
  created() {
    window.addEventListener('keyup', (e) => {
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

<style>
.body-fs-v-img {}
</style>

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
  background-color: rgba(0, 0, 0, .7);
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

.header-v-img {
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, .3);
  height: 50px;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.close-v-img {
  width: 80px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 50px;
}

.count-v-img {
  font-size: 15px;
  color: white;
  margin-left: 10px;
}

.close-v-img {
  margin-right: 10px;
  color: #E5E6EB;
  font-size: 30px;
  cursor: pointer;
  -webkit-transition: color .4s ease-in-out;
  transition: color .4s ease-in-out;
  text-align: right;
}

.close-v-img:hover {
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
  background-color: rgba(0, 0, 0, .3);
  z-index: 1000;
  opacity: .3;
  -webkit-transition: opacity .3s ease-in-out;
  transition: opacity .3s ease-in-out;
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
  -webkit-transition: opacity .3s ease-in-out;
  transition: opacity .3s ease-in-out;
}
</style>
