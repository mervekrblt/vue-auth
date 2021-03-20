import { createStore } from 'vuex'
import axios from 'axios'
import CryptoJS from "crypto-js";


export default createStore({
  state: {
    login: false,
    user: {},
  },

  mutations: {
    userLogin(state, payload) {
      state.user = payload
      // console.log('stateuser',state.user)
      state.login = true
    }
  },

  actions: {
    async userLogin(context, payload) {
      // console.log(context, payload)
      try {
          await axios.post('https://aodapi.eralpsoftware.net/login/apply', {
            username: payload.email,
            password: payload.password
          })
      
          context.commit('userLogin', payload)
      }
      catch(err) {
          alert(err)
      }
    }
  },

  getters: {
  user(state) {
    return state.user
  }
  },
  modules: {
  }
})
