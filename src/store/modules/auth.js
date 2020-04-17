import authapi from '@/api/auth'

const state = {
  user: null,
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {
  logup({ commit }, { username, password }) {
    return authapi.logup({ username, password }).then(res => {
      commit({
        type: 'setUser',
        user: res.data
      })
      commit('setLogin', { isLogin: true })
    })
  },
  async login({ commit }, { username, password }) {
    let res = await authapi.login({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },
  async logout({ commit }) {
    await authapi.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },
  async checkLogin({ commit, state }) {
    if (state.isLogin) return true
    let res = await authapi.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if (!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
