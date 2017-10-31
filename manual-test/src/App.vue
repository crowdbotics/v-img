<template>
  <div>
    <input type="number" v-model="n" id="">
    <img v-img src="https://unsplash.it/200/300?image=2">
    <img v-img src="https://unsplash.it/200/300?image=324">
    <img v-img="{ src: `https://unsplash.it/200/300?image=${n}` }" :diabled="n === 2">
    <img v-img:v src="https://unsplash.it/200/300?image=3">
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
    }
  },
};
</script>

<style>
img {
  width: 200px;
  height: 100px;
}
</style>

