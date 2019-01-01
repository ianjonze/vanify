<template>
  <div id="parallax-bg" class="home container-fluid">
    <VanifyHeader></VanifyHeader>
    <VanifyBody></VanifyBody>
    <VanifyVehicleSelect></VanifyVehicleSelect>
  </div>
</template>
<script>
// @ is an alias to /src
import VanifyHeader from '@/components/VanifyHeader.vue'
import VanifyBody from '@/components/VanifyBody.vue'
import VanifyVehicleSelect from '@/components/VanifyVehicleSelect.vue'

export default {
  name: 'home',
  components: {
    VanifyHeader,
    VanifyBody,
    VanifyVehicleSelect
  }
}

</script>
<style scoped lang="scss">
</style>
