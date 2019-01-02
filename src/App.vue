<template>
  <div id="app" class="light-bg">
   <VanifyHeader></VanifyHeader>
   <SideNav></SideNav>
    <!-- <router-link to="/">Home</router-link> -->
    <router-view></router-view>
  </div>
</template>
<script>
    let background = document.getElementById("app");
    function setTranslate( el, xPos, yPos, zPos) {
        let trans = `translate3d( ${xPos}px, ${yPos}px, ${zPos}px)`;
        el.style.transform = trans;
    }
    
    window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
    let xScrollPosition;
    let yScrollPosition;
    function scrollLoop() {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;
        setTranslate( background, 0, yScrollPosition * -0.5,  0);
        requestAnimationFrame(scrollLoop);
    }
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
