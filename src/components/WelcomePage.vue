<template>
  <h1>Welcome</h1>
  <h2>{{ name }}</h2>
</template>

<script>
export default {
    name: 'WelcomePage',
    inject: ['name']
}
</script>

<style>

</style>