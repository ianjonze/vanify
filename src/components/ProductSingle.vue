<template>
  <div class="product-single col-12 col-md-6 col-lg-3">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ProductSingle',
  props: ['products']
}

</script>
<style scoped lang="scss">

.card {
	padding:50px 20px 20px 20px;
	background-color: #1d1d1d;
	color: white;
	border: 1px solid #ff6d00;
	margin-bottom: 20px;
	drop-shadow: 5px 5px 5px #000 .1;
	&:hover {
		transform: scale(1.05);
		transition: transform .5s,  background-color 1s ease;
		background-color: #2e2e2e;
	}
	.card-title {
    margin-bottom: .75rem;
    font-size: 1.5em;
	}
	.btn-warning {
		width: 100%;
		font-weight: 400;
		font-size: 1em;
		text-transform: uppercase;
	}
}

</style>
