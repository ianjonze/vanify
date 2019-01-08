<template>
  <div id="parallax-bg" class="home container-fluid no-gutters">
    <VanifyBody></VanifyBody>
    <VanifyVehicleSelect></VanifyVehicleSelect>
    <ProductGrid></ProductGrid>
  </div>
</template>
<script>
// @ is an alias to /src
import VanifyBody from '@/components/VanifyBody.vue'
import VanifyVehicleSelect from '@/components/VanifyVehicleSelect.vue'
import ProductGrid from '@/components/ProductGrid.vue'

export default {
  name: 'home',
  components: {
    VanifyBody,
    VanifyVehicleSelect,
    ProductGrid
  }
}

</script>
<style scoped lang="scss">
.container-fluid{
   padding: 0px;
   margin: 0px;
}
</style>
