<template>
  <div class="perfil">
    <PerfilHeader/>
    <BasicInfo ref="info"/>
    <PortfolioMusic ref="portf"/>
  </div>
</template>

<script>
import BasicInfo from '@/components/Perfil/BasicInfo.vue';
import PortfolioMusic from '@/components/Perfil/Portfolio.vue';
import PerfilHeader from '@/components/Perfil/PerfilHeader.vue';
import {getUserDocumentByEmail} from '@/firebase';

export default {
  name: 'PerfilView',
  components: {
    PerfilHeader,
    BasicInfo,
    PortfolioMusic
  },
  async mounted() {
    // Acessando o valor do ID
    const id = this.$route.params.id;
    const documento = await getUserDocumentByEmail(id);
    const basic = {
      biografia: documento.biografia,
      cidade: documento.cidade,
      estado: documento.estado,
      nome: documento.nome,
      telefone: documento.telefone,
      trabalho: documento.trabalho,
      email: documento.email,
      comentarios: documento.feedbacks,
      rating: documento.avaliacaoMedia,
      generoMusical: documento.generoMusical
    }

    const vetor = documento.trabalhos;

    this.$refs.info.preencherDadosDePerfil(basic);
    this.$refs.portf.preencherVetor(vetor, id);
  },
}
</script>

<style>
  body {
    background-color: black;
  }
</style>