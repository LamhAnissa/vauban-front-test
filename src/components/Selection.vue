<template>
  <v-container>
  <v-container fluid grid-list-xl>
    <v-layout row align-content-end="true">
        <h2 class="grey--text">My Selection</h2>

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
              <v-icon color="red lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-layout>

  </v-container>
  </v-container>
</template>

<script>
import { mapGetters} from 'vuex'
export default{

    data() {
    return {
    };
  },

  methods:{},
  
computed:
    mapGetters({
    myselection: 'mySelection'
  }),

}
</script>