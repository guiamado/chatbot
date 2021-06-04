<template>
  <v-app class="background-app">
    <Header />
    <v-main>
      <HelloWorld/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.background-app {
  /* background: linear-gradient(168deg, #f7f7f7 50%, #ffffff 40%) !important; */
  background: linear-gradient(160.39deg, #FFFFFF -6.07%, #F7F7F7 38.35%, #FFFFFF 42.78%) !important;
}
</style>
