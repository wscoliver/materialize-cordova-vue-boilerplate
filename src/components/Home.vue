<template lang="pug">
p  Home Page.
</template>
<style lang="stylus">

</style>
<script>
import u from 'umbrellajs'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(this.loaded)
  },
  methods: {
    loaded () {
      // App DOM is loaded.
    }
  } 
}
</script>
