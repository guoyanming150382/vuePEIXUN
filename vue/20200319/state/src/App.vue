<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <!--<router-view/>-->
  </div>
</template>

<script>
	import productListOne from './components/productlistone'
	import productListTwo from './components/productlisttwo'
export default {
  name: 'App',
  data(){
  	return{
  		
  	}
  },
  components:{
  	productListOne,
  	productListTwo
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
