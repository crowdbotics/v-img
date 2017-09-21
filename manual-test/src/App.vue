<template>
  <div>
    <img v-img:a="{ opened, changed, closed }"
      src="https://unsplash.it/200/300?image=55">
    <img v-img:a="{ opened, changed, closed }"
      src="https://unsplash.it/200/300?image=56">
  </div>
</template>

<script>
export default {
  methods: {
    opened() {
      console.log('OPENED');
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
