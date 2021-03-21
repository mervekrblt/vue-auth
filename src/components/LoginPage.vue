<template>

  <section>
    <form @submit.prevent="userAuth">
      <input type="text" placeholder="username" v-model="username">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Login</button>
    </form>
  </section>

  <welcome-page></welcome-page>
  
</template>

<script>
import WelcomePage from './WelcomePage'
import { mapActions } from 'vuex'


export default {
  name: 'LoginPage',

  components: {
    WelcomePage,
  },

  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    ...mapActions(['userLogin']),

    userAuth() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      }

      if(this.username.trim() === '' || this.email.trim() === '' || this.password === ''){
        alert("Inputs can not be empty")
      }else {
        this.userLogin(user)
        // console.log(user)
      }
    }
  },

}
</script>

<style scoped>

</style>
