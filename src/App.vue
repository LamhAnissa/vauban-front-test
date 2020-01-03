<template>
  <v-app>
    <Header></Header>
    <v-content>
      <CharactersShop></CharactersShop>
    </v-content>
     <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import CharactersShop from './components/CharactersShop'
import Footer from './components/Footer'


export default {
  name: 'App',

  components: {
    Header,
    CharactersShop,
    Footer,

  },

  data: () => ({
    //
  }),
};
</script>
