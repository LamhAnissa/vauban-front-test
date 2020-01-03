<template>
  <v-container>
  <v-container fluid grid-list-xl>
    <v-layout row align-content-end="true">
        <h2 class="grey--text">My Selection</h2>
        <v-btn icon   v-if="myselection.length>0" v-on:click="deleteAllDialog=true">
              <v-icon color="black">mdi-delete-forever</v-icon>
            </v-btn>
                    <v-dialog
          v-model="deleteAllDialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title  class="headline grey lighten-2"
            primary-title> Warning </v-card-title>
                
              <v-spacer></v-spacer>

            <v-card-text>
                <br>
              <span class="font-weight-regular grey--text" >You are about to delete your selection, are you sure?</span>
            </v-card-text>

            <v-card-actions>
           
            <v-btn text="" v-on:click="deleteAll(); deleteAllDialog=false;" color="red"> Yes
                </v-btn>
            <v-btn text v-on:click="deleteAllDialog=false" color="blue"> No
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      <v-spacer/>
    </v-layout>
    <v-divider class="mb-4"/>
  
    <v-layout column wrap v-if="myselection.length !== 0">
       <v-list>
        <v-list-item
          v-for=" characterName in myselection"
          :key="characterName.index"
        >
          <v-list-item-icon>
            <v-icon color="yellow">mdi-star</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title v-text="characterName"></v-list-item-title>
          </v-list-item-content>
  
          <v-list-item-action>
            <v-btn icon>
              <v-icon v-on:click="removeFromMySelection(characterName)" color="red lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-layout>

  </v-container>
  </v-container>
</template>

<script>
import { mapActions,mapGetters} from 'vuex'
export default{

    data() {
    return {
        deleteAllDialog: false,
    };
  },

  methods:
       mapActions([
        'removeFromMySelection',
        'deleteAll'
  ]),
  
  
computed:
    mapGetters({
    myselection: 'mySelection'
  }),

}
</script>