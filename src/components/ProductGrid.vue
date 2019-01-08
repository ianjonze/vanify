<template>
  <div class="product-grid row">
    <ProductSingle v-for="product in products">
      <div class="card">
        <h2 class="card-title">{{ product.productTitle }}</h2>
        <img class="card-img-top" :src="product.imgSrc" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">{{ product.price }}</p>
          <a href="#" class="btn btn-warning">Add to Cart</a>
        </div>
      </div>
    </ProductSingle>
  </div>
</template>

<script>
  
import ProductSingle from '@/components/ProductSingle.vue'

export default {
  name: 'ProductGrid',
  data () {
    return {
      products: [
      { productTitle: 'Vauxhall Vivaro 2015+ SWB - OS Rear', price: 150 , description: 'this is a vanrack', imgSrc: require('../../uploads/rack.jpg')},
      { productTitle: 'Renault Trafic 2015+ SWB - OS Rear', price: 150 , description: 'this is a vanrack', imgSrc: require('../../uploads/rack.jpg')},
      { productTitle: 'Vauxhall Vivaro 2015+ SWB - OS Rear', price: 150 , description: 'this is a vanrack', imgSrc: require('../../uploads/rack.jpg')},
      { productTitle: 'Vauxhall Vivaro 2015+ SWB - OS Rear', price: 150 , description: 'this is a vanrack', imgSrc: require('../../uploads/rack.jpg')},
      { productTitle: 'Vauxhall Vivaro 2015+ SWB - OS Rear', price: 150 , description: 'this is a vanrack', imgSrc: require('../../uploads/rack.jpg')},
      ]
    }
  },
  components: {
    ProductSingle
  }
}
</script>

<style scoped lang="scss">
.product-grid{
  padding: 2em;
  background-color: #1d1d1d;
}
</style>
