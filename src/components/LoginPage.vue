<template>

  <section v-if="!$store.state.login">
    <form @submit.prevent="userLogin">
      <input type="text" placeholder="username" ref="username">
      <input type="email" placeholder="email" v-model="email">
      <input type="text" placeholder="password" v-model="password">
      <button></button>
    </form>
  </section>

  <welcome-page v-else></welcome-page>
  
</template>

<script>
import WelcomePage from './WelcomePage'
import axios from 'axios'

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
        localStorage.setItem('token', response.data.token)

        axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
    }
  }
}
</script>

<style scoped>

</style>
