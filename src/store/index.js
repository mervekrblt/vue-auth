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
    },
  },

  actions: {
    async userLogin(context, payload) {
      // console.log(context, payload)
      await axios.post('https://aodapi.eralpsoftware.net/login/apply', {
            username: payload.email,
            password: payload.password,
            email: payload.email
          })

          .then(response => {

          // set token to local with crypto.js
          const encToken = CryptoJS.AES.encrypt(response.data.token, 'secret key 123').toString();
          localStorage.setItem('token', encToken)

          axios.defaults.headers.common['Authorization'] = response.data.token
          
          context.commit('userLogin', payload)

          const decrypToken = CryptoJS.AES.decrypt(encToken, "secret key 123").toString(CryptoJS.enc.Utf8)
          console.log(response.data.token, decrypToken, encToken)
          })

          .catch(err => {
          alert(err)
          })
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
