<template>
  <div class="sidenav" id="sidenav">
    <img class="logo-main" src="@/assets/vanify_logo_main.svg" alt="Vanify Logo">
    <ul>
      <li><i class="fas fa-home"></i><router-link to="/">Home</router-link></li>
      <li><i class="fas fa-paper-plane"></i><router-link to="/">Contact</router-link></li>
      <li><i class="fas fa-info-circle"></i><router-link to="/">About</router-link></li>
    </ul>
  </div>
</template>
<script>
import { eventBus } from '@/main'
export default {
  name: 'SideNav',
  created() {
    eventBus.$on('navToggled',(status) => {
      if(status == true) {
        document.getElementById("sidenav").style.transform = "translateX(0px)";
      } else {
        document.getElementById("sidenav").style.transform = "translateX(300px)";
      }
    })
  }
}
</script>
<style scoped lang="scss">

@keyframes nav {
    0% {transform: rotateY(39deg) translateY(700px); opacity: 0;}
    100% {transform: rotateY(0deg) translateY(0px); opacity: 1;}
}
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

#sidenav{
  background-color: rgba(0,0,0,1);
  height: 100vh;
  width: 300px;
  right: 0;
  position: fixed;
  overflow-x: hidden;
  z-index: 10;
  font-family: 'Roboto';
  font-weight: 100;
  transition: transform 1s ease-in-out;
  transform: translateX(300px);
  img {
    margin-top: 20px;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 20px;
    li {
        @for $i from 1 through 3 {
         &:nth-child(#{$i}) {
             animation: nav;
             animation-duration: 300ms * $i;
             animation-delay: 100ms * $i;
             animation-timing-function: ease-in-out;
             animation-fill-mode: forwards;
             padding: 10px 30px;
             border-bottom: solid 1px #1d1d1d;
             .svg-inline--fa{
              margin-right: 10px;
            }
          }
        }
      &:hover{
        background-color: #1d1d1d;
        transition: background-color .3s;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
</style>
