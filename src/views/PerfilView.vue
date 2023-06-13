<template>
  <div class="perfil">
    <BasicInfo/>
    <PortfolioMusic/>
  </div>
</template>

<script>
import BasicInfo from '@/components/Perfil/BasicInfo.vue';
import PortfolioMusic from '@/components/Perfil/Portfolio.vue';

export default {
  name: 'PerfilView',
  components: {
    BasicInfo,
    PortfolioMusic
  }
}
</script>

<style>
  body {
    background-color: black;
  }
</style>