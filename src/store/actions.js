export const addToMySelection = ({ commit }, character) => {
    commit('ADD_TO_SELECTION', { character })
  }

  export const removeFromMySelection = ({ commit }, character) => {
    commit('REMOVE_FROM_SELECTION', { character })
  }

  export const deleteAll = ({ commit }) => {
    commit('DELETE_SELECTION')
  }