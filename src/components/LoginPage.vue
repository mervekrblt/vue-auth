<template>

  <section v-if="!$store.state.login">
    <form @submit.prevent="userLogin">
      <input type="text" placeholder="username" ref="username">
      <input type="text" placeholder="password" v-model="password">
      <button></button>
    </form>
  </section>

  <welcome-page v-else></welcome-page>

</template>

<script>
import WelcomePage from './WelcomePage'

export default {
  name: 'LoginPage',

  components: {
    WelcomePage
  },

  data() {
    return {
      password: '',
    }
  },

  methods: {
    userLogin() {
      this.$store.state.login = true
      this.$store.state.username = this.$refs.username.value
    }
  }
}
</script>

<style scoped>

</style>
