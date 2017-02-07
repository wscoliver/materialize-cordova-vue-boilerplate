<template lang="pug">
.tile
  .row(v-bind:menuid="menuitem.id")
    .col-xs-2
      .box
        p {{ (menuitem.id) }}
    .col-xs-8
      .box
        p {{ menuitem.name }}
    .col-xs-2
      .box
        p.menu-price ${{ menuitem.price }}
</template>
<style lang="stylus">
</style>
<script>
import Hammer from 'hammerjs'
import { u } from 'umbrellajs'
export default {
  data () {
    return {

    }
  },
  computed : {
  },
  props: [
    'menuitem',
  ],
  mounted () { 
    this.$nextTick(this.loaded)
  },
  methods: {
    loaded () {
      // App DOM is loaded.
      let menuItem = u(".row[menuid='"+this.menuitem.id+"']").nodes[0]
      let hammer = new Hammer(menuItem)
      hammer.on('swipe', this.onSwipe)
    },
    onSwipe (evt) {
      let msg = this.menuitem.name + " was added to Orders."
      if(navigator.notification) {
        navigator.notification.alert(msg, null, 'Order Confirmation', 'Ok')
      } else {
        alert(msg)
      }
      this.$store.dispatch('addToOrder', this.menuitem.id)
    }
  } 
}

</script>
