<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import Header from "./components/Homepage/Header.vue";
import Article from "./components/Article.vue";

import Footer from "./components/Footer.vue";
import Footer2 from "./components/Footer2.vue";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div id="app">

    <Header></Header>


    <main class="pt-28">
      <router-view></router-view>
    </main>
    <Footer></Footer>
    <Footer2></Footer2>
    
    
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
