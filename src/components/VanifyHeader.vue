<template>
  <div>
    <header id="header" class="row no-gutters">
      <div class="col-12 no-gutters">
        <img  id="logo-main" class="logo-main" src="@/assets/vanify_logo_main.svg" alt="Vanify Logo">
        <button
          id='menuToggle'
          class="hamburger hamburger--spin-r"
          @click="navToggle"
          v-bind:class=" {'is-active': isActive}">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        </button>
      </div>
    </header>
  </div>
</template>
<script>
import { eventBus } from '@/main.js'
export default {
  name: 'VanifyHeader',
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    navToggle () {
      this.isActive = !this.isActive
      if (this.isActive === true) {
        document.getElementById('header').style.marginRight = '300px'
        document.getElementById('logo-main').style.opacity = '0'
      } else {
        document.getElementById('header').style.marginRight = '0px'
        document.getElementById('logo-main').style.opacity = '1'
      }
      eventBus.$emit('navToggled', this.isActive)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:hover{
    outline: none;
 }
button:focus{
  outline: none;
}
#header{
  transition: margin-right 1s ease-in-out;
}
#logo-main{
  transition: opacity 1s;
}
</style>
