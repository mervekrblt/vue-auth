<template>
  <h1>Welcome</h1>
  <h2>{{ user.username }}</h2>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'WelcomePage',

    computed: {
    ...mapGetters(['user']),
  },
}
</script>

<style>

</style>