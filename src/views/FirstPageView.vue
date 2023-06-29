<template>
	<div class="first">
		<FirstPage/>
	</div>
</template>

<script>
	import FirstPage from '@/components/FirstPage/FirstPage.vue';

	export default {
		name: 'FirstPageView',
		components: {
			FirstPage
		},
} 
</script>

<style scoped>
  .first {
    background-image: url("../assets/imgs/fundo_login.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  * {
    font-family: 'Arapey', serif;
  }
 
  
  </style>
