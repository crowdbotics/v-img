<template>
  <div>
    <input v-model="title" placeholder="title" type="text">
    <input v-model="group" placeholder="group" type="text">
    <input v-model="openOn" placeholder="openOn" type="text">
    <img v-img:a="{ sourceButton: true, title, group, openOn }" src="https://unsplash.it/200/300?image=2">

    <img v-img:v="{title: 'titlehere haha haha'}"
      src="https://unsplash.it/200/300?image=1">

    <img v-img:v
      src="https://unsplash.it/200/300?image=3">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      group: '',
      openOn: 'dblclick',
    }
  },
};
</script>
