<template>
  <div>Merve</div>
  <welcome-page v-if="$store.state.login"></welcome-page>

  <button @click="userLogin"></button>
</template>

<script>
import WelcomePage from './WelcomePage'

export default {
  name: 'LoginPage',
  provide(){
        return {
            name:this.name
        }
    },

  data() {
    return {
      name: 'abc'
    }
  },

  components: {
    WelcomePage
  },

  methods: {
    userLogin() {
      this.$store.state.login = true
    }
  }
}
</script>

<style scoped>

</style>
