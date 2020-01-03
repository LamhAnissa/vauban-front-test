<template>
  <v-container>
  <v-container fluid grid-list-xl>
    <v-layout row wrap align-center>
        <h2 class="grey--text">Star Wars Characters </h2>
      <v-spacer/>
    </v-layout>
    <v-divider class="mb-4"/>
 <v-row cols="12" sm="6" md="3">
       <v-text-field
            v-model="search"
            label="Solo"
            placeholder="Search"
            append-icon="search"
            solo
        ></v-text-field>
    </v-row>
    <v-layout row wrap v-if="filteredCharacters.length !== 0">
      <v-flex v-for="(character,index) in filteredCharacters" :key="index" xs12 sm6 md4 lg3>
    <v-hover>
         <template v-slot:default="{ hover }">
        <v-card hover class="pointer"  v-on:mouseenter="mouseOnCard(index)"  v-on:mouseleave="mouseOutCard()">
          <v-card-title> 
            <span class="textEllipsis headline" v-text="character.name"></span>
          </v-card-title>
          <v-card-subtitle>
              <h3 class="font-weight-regular yellow--text ">Caracteristics </h3>
          </v-card-subtitle>
            <v-card-text>
            <span v-if="character.gender == 'n/a'" >Gender: undefined  </span>
            <span v-else>Gender: {{character.gender}} </span><br>
              <span>Height: {{character.height}} </span><br>
              <span> Mass: {{character.mass}} </span><br> 
            </v-card-text>
            <v-row>
          <v-fade-transition>
            <v-overlay
              v-if="selectedIndexCard===index"
              absolute
              color="grey"
            >
              <v-btn color="green">Add to my selection</v-btn>
              <v-btn color="red">Already Added</v-btn>
            </v-overlay>
          </v-fade-transition>
           </v-row>
        </v-card>
              </template>
            </v-hover>
      </v-flex> 
         </v-layout>
         <v-layout v-else justify-center>
      <v-card class="mt-4 pa-3">
        <v-layout column justify-center align-center>

          <v-flex class="pa-2" md8>
            <v-btn :disabled="true">No Result 
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-layout>
          </v-container>
  </v-container>
</template>
   
<script>
import {characters} from '../data/characters'

export default{

 data() {
    return {
       characters: characters,
       search:'' ,
       selectedIndexCard: '',
    };
  },

  methods:{
     mouseOnCard: function(index){
          return this.selectedIndexCard=index;
      },

      mouseOutCard: function(){
          return  this.selectedIndexCard=-1;
      },

  },
  computed:{
          filteredCharacters:function(){
        return this.characters.filter((character)=>{
            let characterName= character.name.toLowerCase();
            return characterName.match(this.search.toLowerCase())
        });
    },

    },
  }


</script>