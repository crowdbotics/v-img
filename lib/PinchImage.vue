<template>
    <div
        class="pinch-wrapper"
        :style="zoomStyles"
        @touchstart="start"
        @touchmove="move"
        @touchend="end"
    >
        <img :src="src" :alt="alt" class="pinch-img" ref="image"/>
    </div>
</template>

<script type="text/babel">

const DBCLICK_TIME = 200;

export default {

  props: {
    src: {
      type: String,
      required: true
    },
    alt: String,
    minZoom: {
      type: Number,
      default: 1
    },
    maxZoom: {
      type: Number,
      default: 2.25
    }
  },

  data() {
    return {
      zoom: 1,
      minZoomBounce: .015,
      maxZoomBounce: .015,
      speed: .5,
      lastX: null,
      lastY: null,
      x: 0,
      y: 0,
      zoomCenter: {
        x: 0,
        y: 0
      },
      width: window.innerWidth,
      height: window.innerHeight,

      lastTouchTime: null,
      clickTimer: null,
      inMovement: false,

      transition: {
        transform: null,
        origin: "transform-origin 400ms linear"
      }
    }
  },

  computed: {
    zoomStyles() {
      let transition = '';

      if(this.transition.transform) transition += this.transition.transform;
      if(this.transition.origin) transition += (transition.length > 0 ? ', ' : '') + this.transition.origin;

      return {
        transform: `scale(${this.zoom}) translate3d(${this.x}px, ${this.y}px, 0px)`,
        transformOrigin: `${this.zoomCenter.x}px ${this.zoomCenter.y}px 0px`,
        transition
      }
    }
  },

  methods: {

    start(event) {
      event.preventDefault();

      if(event.touches.length === 2) {
        this.handlePinchStart(event);
      }
      else if(event.touches.length === 1) {
        this.handleTapStart(event);
      }
    },

    end(event) {
      event.preventDefault();

      if(!this.inMovement && this.zoom <= this.minZoom) {
        const timeDiff = event.timeStamp - this.lastTouchTime;

        if(timeDiff > DBCLICK_TIME) {
          this.resetZoom();
        }
      }
      else {
        this.lastX = 0;
        this.lastY = 0;
      }

      if(event.touches.length === 0) {
        if(this.zoom <= 1) {
          this.lastTouchTime = event.timeStamp;
        }
      }
    },

    move(event) {
      event.preventDefault();

      if(event.touches.length === 2) {
        this.handlePinchMove(event);
      }
      else {
        this.handlePanMove(event);
      }
    },

    resetZoom() {
      console.log('reset');

      //this.transition.transform = "transform 200ms linear";

      this.zoom = 1;
      this.zoomCenter.x = 0;
      this.zoomCenter.y = 0;
      this.x = 0;
      this.y = 0;

      setTimeout(() => {
        this.transition.transform = null;
      }, 200);
    },

    handlePinchStart(event) {
      const {x,y} = this.getTouchCenter(
        this.getTouchesCenter(event.touches[0], event.touches[1])
      );

      if(this.zoom < this.maxZoom) {
        this.zoomCenter.x = x;
        this.zoomCenter.y = y;
      }

      this.lastDistance = this.getZoomDistance(event.touches[0], event.touches[1]);
    },

    handlePinchMove(event) {
      const zoom  = this.getZoomDistance(event.touches[0], event.touches[1]);
      const last  = (zoom / this.lastDistance);
      const scale = this.calcZoom(this.minZoom - this.minZoomBounce, this.maxZoom + this.maxZoomBounce, this.zoom * last);

      if(this.zoom < this.maxZoom || (this.zoom >= this.maxZoom && scale < this.zoom)) {
        this.zoom = scale;
      }

      this.lastDistance = zoom;
    },

    handlePanMove(event) {
      if(this.zoom > 1) {
        const touch = event.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        if (!this.lastX || !this.lastY) {
          this.lastX = x;
          this.lastY = y;

          return null;
        }
        else {
          const rect = this.$refs.image.getBoundingClientRect();

          let diffX = (x - this.lastX) * this.speed;
          let diffY = (y - this.lastY) * this.speed;

          this.transition.transform = null;

          //apply transform
          this.x += diffX;
          this.y += diffY;

          //bounds
          if(rect.left > 0 && diffX > 0) {
            this.x -= diffX;
          }
          if(rect.right < this.width && diffX < 0) {
            this.x -= diffX;
          }
          if(rect.top > 0 && diffY > 0) {
            this.y -= diffY;
          }
          if(rect.bottom < this.height && diffY < 0) {
            this.y -= diffY;
          }

          //to calc the next move
          this.lastX = x;
          this.lastY = y;
        }
      }
    },

    handleTapStart(event) {
      const touch = event.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      if(!this.lastX || !this.lastY) {
        this.lastX = x;
        this.lastY = y;
      }

      if(this.lastTouchTime) {
        const timeDiff = event.timeStamp - this.lastTouchTime;

        if(timeDiff < DBCLICK_TIME) {
          this.handleDoubleTap(event.touches[0]);

          this.lastX = null;
          this.lastY = null;
        }
      }

      this.lastTouchTime = event.timeStamp;
    },

    handleDoubleTap(touch) {
      let {x,y} = this.getTouchCenter({ x:touch.clientX, y: touch.clientY });

      clearTimeout(this.clickTimeout);

      this.inMovement = true;
      this.transition.origin    = "transform-origin 400ms linear";
      this.transition.transform = "transform 200ms linear";

      if(this.zoom > this.minZoom) {
        this.zoom = 1;
        this.x = 0;
        this.y = 0;

        this.clickTimeout = setTimeout(() => {
          this.zoomCenter.x = 0;
          this.zoomCenter.y = 0;

          this.inMovement = false;
        }, 200);
      }
      else {
        this.transition.origin = null;

        this.zoomCenter.x = x;
        this.zoomCenter.y = y;

        this.clickTimeout = setTimeout(() => {
          this.transition.origin = "transform-origin 400ms linear";
          this.zoom              = this.maxZoom;

          this.inMovement = false;
        }, 200);
      }
    },

    getTouchCenter({x, y}) {
      const rect = this.$el.getBoundingClientRect();

      return {
        x: x - rect.left,
        y: y - rect.top
      }
    },

    calcZoom(e, t, n) {
      return Math.min(t, Math.max(e, n))
    },

    getZoomDistance(e, t) {
      return Math.sqrt(Math.pow(e.clientY - t.clientY, 2) + Math.pow(e.clientX - t.clientX, 2));
    },

    getTouchesCenter(touch1, touch2) {
      return {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2
      }
    },

    bounds() {
      const rect = this.$refs.image.getBoundingClientRect();

      console.log(rect);
      console.log({x:this.x,y:this.y,zoom:this.zoom});

      if(rect.left < 0) {
        this.x = 0;
      }
      else if(rect.right > this.width) {
        this.x = 0;
      }
      if(rect.top < 0) {
        this.y = 0;
      }
      else if(rect.bottom > this.height) {
        this.y = 0;
      }

      console.log({x:this.x,y:this.y});
    }

  }

}
</script>

<style lang="css">
.pinch-wrapper {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;

    align-items: stretch;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    text-decoration: none;
    list-style: none;
    min-height: 0;
    min-width: 0;
}
.pinch-wrapper:hover {
    will-change: transform;
}
    .pinch-img {
        position: absolute;
        width: auto !important;
        height: auto !important;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        max-width: 100%;
        max-height: 100%;
        object-position: center;
        margin: auto;
    }
</style>
