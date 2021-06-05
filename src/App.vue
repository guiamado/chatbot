<template>
  <v-app class="background-app">
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
  mounted (){
    (function(d, m){
      var kommunicateSettings = {
        "appId":"26488b84ef40f69390bb8a2333136d83f",
        "popupWidget":true,
        "automaticChatOpenOnNavigation":true,
        "labels": {
          'input.message': 'Digite sua mensagem...',
          'start.new': 'Começar uma conversa nova',
          'conversations.title': 'Conversas'
        },
        "language": "pt-BR"
      };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  },
};
</script>
<style scoped>
.background-app {
  /* background: linear-gradient(168deg, #f7f7f7 50%, #ffffff 40%) !important; */
  background: linear-gradient(160.39deg, #FFFFFF -6.07%, #F7F7F7 38.35%, #FFFFFF 42.78%) !important;
}
</style>
