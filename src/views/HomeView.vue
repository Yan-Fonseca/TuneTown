<template>
  <div class="home">
    <HomeHeader/>
    <HomePage/>
    <HomeFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/Home/Home.vue'
import HomeHeader from "@/components/HomeHeader/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter/HomeFooter.vue";

export default {
  name: 'HomeView',
  components: {
    HomePage,
    HomeHeader,
    HomeFooter
  }
}
</script>
