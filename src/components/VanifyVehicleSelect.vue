<template>
  <div class="row grey-bg">
    <div class="col-12 col-md-6 no-margin no-gutters"></div>
    <div class="col-12 col-md-6 no-margin no-gutters">
      <div id="selectMake">
        <div class="row select-make">
          <div class="col-12 col-lg-6">
            <h2 class="select-heading">Manufacturer</h2>
            <select v-model="selectedMake" class="form-control input-group-lg">
              <option v-for="option in makeOptions" v-bind:value="option">
                {{ option.value }}
              </option>
            </select>
          </div>
          <div class="col-12 col-lg-6 align-middle">
            <img :src='selectedMake.logoUrl' style="height:100px">
               </div>
          </div>
          <div class="" v-if="selectedMake">
            <div class="row">
            <div class="col-12 col-lg-6">
              <h2>Select your model</h2>
              <select v-model="selectedModel" id="vehicle-models" class="form-control">
                <option v-for="option in modelOptions[selectedMake.makeId]">
                  {{option.model}}
                </option>
              </select>
            </div>
            <div class="col-12 col-lg-6">
              <!--Dynamic Vehicle picture-->
            </div>
          </div>
            <div class="row">
              <div class="col-12 text-center">
                <button @click="" class="go-button btn btn-warning">GO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { makeOptions, modelOptions } from "@/components/makes.js"
export default {
  name: 'VanifyVehicleSelect',
  data () {
    return {
      selectedMake: '',
      selectedModel: '',
      makeOptions,
      modelOptions,
      vehicleData: null
    }
  },
  watch: {
    make: function (event) {
      document.getElementById('#vehicle-models').dropdown('clear')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grey-bg {
  background-color: #1d1d1d;
  color: white;
  min-height: 50vh;
  padding: 5vh;
  // position: absolute;
  width: 100%;
  margin:0
}

.go-button{
  width: 100%;
  font-weight: 900;
  font-family: roboto;
  font-size: 1.5em;
  margin-top: 30px
}

</style>
