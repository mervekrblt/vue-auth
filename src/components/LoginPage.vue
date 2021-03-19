<template>

  <section v-if="!$store.state.login">
    <form @submit.prevent="userLogin">
      <input type="text" placeholder="username" ref="username">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Login</button>
    </form>
  </section>

  <welcome-page v-else></welcome-page>
  
</template>

<script>
import WelcomePage from './WelcomePage'
import axios from 'axios'
import CryptoJS from "crypto-js";

export default {
  name: 'LoginPage',

  components: {
    WelcomePage,
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async userLogin() {

      const response = await axios.post('https://aodapi.eralpsoftware.net/login/apply', {
        username: this.email,
        password: this.password
      })
        this.$store.state.login = true
        this.$store.state.username = this.$refs.username.value

        
        const encToken = CryptoJS.AES.encrypt(response.data.token, 'secret key 123').toString();
        const decrypToken = CryptoJS.AES.decrypt(encToken, "secret key 123").toString(CryptoJS.enc.Utf8)
        console.log(encToken)
        console.log(decrypToken, localStorage.getItem('token'))
        console.log(response.data.token)

        localStorage.setItem('token', encToken)

        axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
    }
  }
}
</script>

<style scoped>

</style>
