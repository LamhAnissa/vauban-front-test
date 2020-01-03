<template>
  <v-app>
    <Header></Header>
    <v-content>
      <CharactersShop></CharactersShop>
      <Selection></Selection>
    </v-content>
     <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import CharactersShop from './components/CharactersShop'
import Selection from './components/Selection'
import Footer from './components/Footer'


export default {
  name: 'App',

  components: {
    Header,
    CharactersShop,
    Selection,
    Footer,

  },

  data: () => ({
    //
  }),
};
</script>
