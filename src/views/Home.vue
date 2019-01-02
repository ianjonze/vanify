<template>
  <div id="parallax-bg" class="home container-fluid">
    <VanifyBody></VanifyBody>
    <VanifyVehicleSelect></VanifyVehicleSelect>
  </div>
</template>
<script>
// @ is an alias to /src
import VanifyBody from '@/components/VanifyBody.vue'
import VanifyVehicleSelect from '@/components/VanifyVehicleSelect.vue'

export default {
  name: 'home',
  components: {
    VanifyBody,
    VanifyVehicleSelect
  }
}

</script>
<style scoped lang="scss">
</style>
