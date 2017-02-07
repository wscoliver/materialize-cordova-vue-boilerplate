<template lang="pug">
nav.g-12.bapp-bar.bottom-bar
  .row.bottom-bar-inner
    .col-xs
      .tile.text-center
        router-link(to="/")
          i.fa.fa-cutlery.color--midnight-blue
    .col-xs
      .tile.text-center
        router-link(to="/payment")
          i.fa.fa-credit-card.color--midnight-blue
    .col-xs
      .tile.text-center
        router-link(to="/history")
          i.fa.fa-history.color--midnight-blue

</template>
<style lang="stylus">
.bapp-bar
  width 100%
.bottom-bar
  position fixed
  bottom 0
  z-index 4
.bottom-bar-inner
  width 100%
  margin 0
.bapp-bar .col-xs
  margin 0
  padding 0
.bapp-bar .text-center
  text-align center
.bapp-bar a
  text-decoration none
  
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
