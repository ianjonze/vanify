<template>
  <div id="app" class="light-bg">
   <VanifyHeader></VanifyHeader>
   <SideNav></SideNav>
    <!-- <router-link to="/">Home</router-link> -->
    <router-view></router-view>
  </div>
</template>
<script>

import VanifyHeader from '@/components/VanifyHeader.vue'
import SideNav from '@/components/SideNav.vue'

export default {
  components: {
    SideNav,
    VanifyHeader
  }
}
</script>
<style lang="scss">
#app{
transition: width 1s ease-in-out;
}
</style>
