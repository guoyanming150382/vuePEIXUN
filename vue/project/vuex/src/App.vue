<template>
  <div id="app">
    <!--<product-list-one :list="products"></product-list-one>
    <product-list-two :list="products"></product-list-two>
    <button @click="reducePrice(4)">商品减价</button>-->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
	import productListOne from '@/components/productlistone'
	import productListTwo from '@/components/productlisttwo'
export default {
  name: 'App',
  data(){
  	return{
//		products:[
//				{name:"111",price:200},
//				{name:"222",price:180},
//				{name:"333",price:160},
//				{name:"444",price:150}
//			]
  	}
  },
  components:{
  	productListOne,
  	productListTwo
  },
  methods:{
//	reducePrice(num){
//		this.products.forEach(product=>{
//				 	product.price-=num
//		  })
//	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
