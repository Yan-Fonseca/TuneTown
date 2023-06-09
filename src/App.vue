<template>
  <HeaderCommon/>
  <router-view/>
</template>

<script>
  import HeaderCommon from './components/common/Header.vue';
  export default {
    name: 'App',
    components: {
      HeaderCommon
    }
  }
</script>

<style>
  
</style>
