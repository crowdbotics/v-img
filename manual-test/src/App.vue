<template>
  <div>
    <input type="number" v-model="n" id="">
    <img v-img src="https://unsplash.it/200/300?image=2">
    <img v-img:v="{ thumbnails: false }" src="https://unsplash.it/200/300?image=324">
    <img v-img:v="{ src: `https://unsplash.it/500/300?image=${n}`}" :src="`https://unsplash.it/200/300?image=${n}`">
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
    };
  },
  created() {
    setInterval(() => {
      this.n += 1;
    }, 20000);
  },
};
</script>

<style>
img {
  width: 200px;
  /* height: 100px; */
}
</style>

