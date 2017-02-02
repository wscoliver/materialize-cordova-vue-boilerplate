<template lang="pug">
nav.g-12.bapp-bar.bg--midnight-blue.color--white
  .row
    .col-xs-3.hamburger-button
      button.btn--flat.bg--midnight-blue
        i.fa.fa-bars.color--white.bg--white
    .col-xs-9.bapp-title-holder
      .row
        .col-xs-9.bapp-title
          p.color--white Heavenly Wang
        .col-xs-3.bapp-title
          button.btn--flat.bg--midnight-blue
            i.fa.fa-search.color--white
      
</template>
<style lang="stylus">
.hamburger-button
  padding-left 2%
  padding-top 2%
.bapp-title
  margin 0 
  padding-top 3% 
.bapp-title p
  padding-top 3%
  margin 0 
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
