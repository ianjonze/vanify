<template>
  <div class="">
    <div class="row no-margin no-gutters">
      <div class="col-12 col-sm-6">
         <img class="feature-img col" src="@/assets/racking_transparent_bg_birch_adjusted.png" alt="Birch Plywood Van Racking">
         <div class="free-delivery .d-none .d-sm-none .d-md-none">FREE next day delivery.</div>
      </div>
      <div class="col-12 col-md-6 no-margin no-gutters">
         <p class="headline"><span>Premium </span>Lightweight Van Racking</p>
         <hr>
         <ul class="bullets">
          <li><span>light weight</span></li>
          <li><span>FAST easy assembly</span></li>
          <li><span>free next day delivery!</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VanifyBody'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.feature-img {
   padding: 5vw; // max-width: 100%;
   position: absolute;
   z-index: 10;
}
.free-delivery {
   background-color: #ff0000;
   border-radius: 50%;
   color: white;
   width: 180px;
   height: 180px;
   text-align: center;
   padding: 50px 20px;
   font-size: 1.9em;
   font-weight: bold;
   line-height: 1em;
   box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
   letter-spacing: -0.08em;
   animation: freeDelivery 5s infinite ease-in-out;
   top: 50px;
   left: 35vw;
   position: absolute;
   z-index: 20;
}

.headline {
   font-size: 5vw;
   font-weight: 900;
   letter-spacing: -0.05em;
   line-height: 0.8em;
   /* text-shadow: 20px 10px 100px rgba(10, 10, 10, 0.1); */
   animation: fadeIn 2s 1 ease-in-out;
   text-transform: uppercase;
   span {
      color: #ff6d00;
   }
}

hr {
   border-color: black;
}

.bullets {
   font-size: 1.5em;
   font-weight: bold;
   letter-spacing: -0.05em;
   color: #ff6d00;
   list-style-type: square;
   span {
      color: #1d1d1d;
   }
}
</style>
