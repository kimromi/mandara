<template lang="pug">
  #app
    router-view
</template>

<script>
  export default {
  }
</script>

<style lang="sass">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  *
    margin: 0
    padding: 0

  html, body
    height: 100%

  body
    align-items: center
    background-position: center
    display: flex
    font-family: Lato, Helvetica, sans-serif
    justify-content: center
    text-align: center
</style>
