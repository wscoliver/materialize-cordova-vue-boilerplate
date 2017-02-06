<template lang="pug">
.home-page
  .row.bg--turqoise
    .col-xs-4.col-xs-offset-4
      p.center-text.color--white Enter Code
      input#search-field.bg--turqoise(type="number",placeholder="000",autocomplete="off")
  .row
    .col-xs-12
      .box
        .tile.tabs.tab-menu-order
          input(type="radio",name="tabs",id="tab1", checked)
          .tab-label-content#tab1-content
            label(for="tab1") Menu
            .tab-content#menu-display
              .tile(v-for="menuItem in menu")
                .row
                  .col-xs-10
                    .box
                      p {{ menuItem.name }}
                  .col-xs-2
                    .box
                      p.center-text ${{ menuItem.price }}
          input(type="radio",name="tabs",id="tab2")
          .tab-label-content#tab2-content
            label(for="tab2") Orders
            .tab-content
              p List of Orders
</template>
<style lang="stylus">
#search-field
  width 100%
  margin-bottom 20px
  margin-top 10px
  color white
  font-size 4rem
  text-align center
  border none
#search-field::-webkit-input-placeholder
  color white
p.center-text
  margin-bottom 0px
  margin-top 20px
  text-align center
#menu-display
  max-width 200%
#menu-display .tile
  max-width 70%
  margin 0
</style>
<script>
import u from 'umbrellajs'
export default {
  data () {
    return {

    }
  },
  computed : {
    menu () {
      return this.$store.getters.getMenu
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
