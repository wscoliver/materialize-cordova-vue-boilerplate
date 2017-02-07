<template lang="pug">
.tile.orderitem
  .row(v-bind:orderid="orderitem.id")
    .col-xs-4
      .box
        p {{ menuitem.name }}
    .col-xs-4
      .box
        p.menu-price {{ orderitem.quantity }}  x $ {{ menuitem.price }} 
    .col-xs-4
      .box
        button.plusbtn.btn--flat.bg--midnight-blue.color--white(v-bind:addorder="orderitem.id") +
        button.minusbtn.btn--flat.bg--red.color--white(v-bind:removeorder="orderitem.id") -
</template>
<style lang="stylus">
.tile.orderitem
  max-width 100%
  padding 0
button.plusbtn.btn--flat
  padding-left 15px
  padding-right 15px
button.minusbtn.btn--flat
  margin-left 5px
  padding-left 15px
  padding-right 15px
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
    menuitem () {
      let needle = this.orderitem.id
      const target = this.menu.find((p) => p.id === needle)       
      return target
    }
  },
  props: [
    'menu',
    'orderitem'
  ],
  mounted () { 
    this.$nextTick(this.loaded)
  },
  methods: {
    loaded () {
      // App DOM is loaded.
      let selectorAdd = u("button[addorder='"+this.orderitem.id+"']").nodes
      if(selectorAdd.length > 0 ) {
        let refItem= selectorAdd[0]
        let hammer = new Hammer(refItem)
        hammer.on('tap', this.tapAddOrder)
      }
      let selectorRemove = u("button[removeorder='"+this.orderitem.id+"']").nodes
      if(selectorRemove.length > 0 ) {
        let refItem= selectorRemove[0]
        let hammer = new Hammer(refItem)
        hammer.on('tap', this.tapRemoveOrder)
      }
    },
    tapAddOrder (evt) {
      this.$store.dispatch('addToOrder', this.orderitem.id)
    },
    tapRemoveOrder (evt) {
      this.$store.dispatch('removeFromOrder', this.orderitem.id)
    }
  } 
}

</script>
