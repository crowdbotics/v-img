<template>
  <div>
    <img v-img src="https://unsplash.it/200/300?image=2">
    <img v-img src="https://unsplash.it/200/300?image=324">
    <img v-img:v="{ title: 'Example title' }" src="https://unsplash.it/200/300?image=1">
    <img v-img:v src="https://unsplash.it/200/300?image=3">
  </div>
</template>

<script>
export default {};
</script>
