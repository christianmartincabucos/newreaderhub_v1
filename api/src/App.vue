<template>
  <div id="app">
    <img src="./assets/logo-mdb-vue-small.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  text-align: center;
  margin-top: 150px;
}
</style>
