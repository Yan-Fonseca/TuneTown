<template>
  <div class="perfil">
    <PerfilHeader/>
    <BasicInfo/>
    <PortfolioMusic/>
  </div>
</template>

<script>
import BasicInfo from '@/components/Perfil/BasicInfo.vue';
import PortfolioMusic from '@/components/Perfil/Portfolio.vue';
import PerfilHeader from '@/components/Perfil/PerfilHeader.vue';

export default {
  name: 'PerfilView',
  components: {
    PerfilHeader,
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