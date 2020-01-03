
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
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }