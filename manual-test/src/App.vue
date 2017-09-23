<template>
  <div>

    <img v-img:a="{ opened, changed, closed}"
      src="https://unsplash.it/200/300?image=2">

    <img v-img:b
      :src="`https://unsplash.it/200/300?image=${cSrc}`">

    <button @click="cSrc++">Change src of first image</button>
    <button @click="fire">clicmke</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cSrc: 55,
      o: this.opened
    };
  },
  methods: {
    fire() {
      this.o = this.opened2
    },
    opened() {
      console.log('OPENED');
    },
    opened2() {
      console.log('OPENED2');
    },
    closed() {
      console.log('CLOSED');
    },
    changed(index) {
      console.log('CHANGED', index);
    },
  }
}
</script>
