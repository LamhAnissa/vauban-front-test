
const state = {
    mycharacters: []
  }

  const getters = {
    mySelection: state => state.mycharacters
  }
  

  const actions = {
  }
  

  const mutations = {
    ADD_TO_SELECTION(state, { character }) {
        state.mycharacters.push(character)
      },

    REMOVE_FROM_SELECTION (state, { character }) {
        state.mycharacters.splice(state.mycharacters.indexOf(character), 1)
    },
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }