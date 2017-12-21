import api from '../services/Api'

const state = {
  user: [],
  lastCheckout: null
}

const actions = {
  login ({commit}, user) {
    console.log('action!')
    api.test().then(() => {
      commit('LOGIN', user)
    })
  },
}

const mutations = {
  LOGIN (state, user) {
    state.user = user
  }
}

const getters = {
}

export default {
  state,
  actions,
  mutations,
  getters
}
