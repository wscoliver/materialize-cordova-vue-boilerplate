<template lang="pug">
.home-page
  .row.bg--turqoise#code-display
    .col-xs-4.col-xs-offset-4
      p.center-text.color--white Enter Code
      input#search-field.bg--turqoise(type="number",placeholder="000",autocomplete="off")
  .row#menu-row
    .col-xs-12
      .box
        .tile.tabs.tab-menu-order
          input(type="radio",name="tabs",id="tab1", checked)
          .tab-label-content#tab1-content
            label#menutab(for="tab1") Menu
            .tab-content#menu-display
              menu-item(v-for="menuItem in menu",v-bind:menuitem="menuItem")
          input(type="radio",name="tabs",id="tab2")
          .tab-label-content#tab2-content
            label#ordertab(for="tab2") Orders 
            .tab-content#order-display
              br
              order-item(v-for="order in orders", v-bind:orderitem="order", v-bind:menu="menu")
</template>
<style lang="stylus">
#ordertab
#menutab
  position fixed
  top 26%
  width 50%
  z-index 3
#search-field
  width 100%
  margin-bottom 20px
  margin-top 10px
  color white
  font-size 3.5rem
  text-align center
  border none
#search-field::-webkit-input-placeholder
  color white
p.center-text
  margin-bottom 0px
  margin-top 20px
  text-align center
p.menu-price
  margin-bottom 20px
  margin-top 0px
  text-align right
#menu-row
  padding 0 
  margin-top 55%
  margin-right 0
  margin-left 0
  margin-bottom 0
  max-height 60%
  overflow-y scroll
#menu-row .col-xs-12
  padding 0 
  margin 0
#menu-display
#order-display
  max-width 200%
#menu-display .tile
  max-width 100%
  margin 0
#code-display
  max-width 100%
  margin 0
  padding-top 0
  padding-bottom 10%
  padding-right 0
  padding-left 0
  position fixed
  top 5.5%
  z-index 3
</style>
<script>
import u from 'umbrellajs'
import MenuItem from './MenuItem.vue'
import Orders from './Orders.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    'menu-item': MenuItem,
    'order-item': Orders
  },
  computed : {
    menu () {
      return this.$store.getters.getMenu
    },
    orders() {
      return this.$store.getters.getOrders
    }
  },
  mounted () { 
    this.$nextTick(this.loaded)
  },
  methods: {
    loaded () {
      // App DOM is loaded.
      this.$store.dispatch('getMenu')
    }
  } 
}
</script>
