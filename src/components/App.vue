<template lang="pug">
#app
  top-navigation-bar
  template(v-if="$route.matched.length")
    router-view
  template(v-else="")
    p 404 Page not found. 
  bottom-navigation-bar
</template>
<style lang="stylus">
#app
  width 100%
</style>
<script>
import TopNavigationBar from './TopNavigationBar.vue'
import BottomNavigationBar from './BottomNavigationBar.vue'
import u from 'umbrellajs'
export default {
  data () {
    return {
      // Data Here.
    }
  },
  components: {
    'top-navigation-bar': TopNavigationBar,
    'bottom-navigation-bar': BottomNavigationBar
  },
  mounted () {
    this.$nextTick(this.loaded)
  },
  methods: {
    loaded () {
      // Do something when loaded.
      this.$router.push('/')
      document.addEventListener('backbutton', this.backButton)
    },
    backButton (evt) {
      //
      if(this.$route.path == '/') {
        // Use Cordova to exit the app.
        navigator.app.exitApp()
      } else {
        // Move back one page.
        navigator.app.backHistory()
      }
    }
  }
}
</script>
