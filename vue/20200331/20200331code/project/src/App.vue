<template>
  <div id="app">
  	<v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
	import vHeader from '@/components/common/header'
	import sellerData from '@/assets/json/seller.json'
export default {
  name: 'App',
  data(){
  	return{
  		seller:sellerData
  	}
  },
  mounted(){
  	console.log(this.seller)
  },
  components:{
  	vHeader
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
}
</style>
