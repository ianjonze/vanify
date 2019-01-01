<template>
  <div id="app" class="light-bg">
   <SideNav></SideNav>
    <!-- <router-link to="/">Home</router-link> -->
    <router-view></router-view>
  </div>
</template>
<script>
import SideNav from '@/components/SideNav.vue'
import { eventBus } from '@/main'
export default {
  components: {
    SideNav
  }
}
</script>
<style lang="scss">
#app{
	transition: width 1s ease-in-out;
}
</style>
