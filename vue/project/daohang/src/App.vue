<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
  	this.getList()
  	this.getList1()
  },
  methods:{
  	getList(){
  		this.$http.get('/api/list').then(res=>{
  			console.log(res)
  		})
  	},
  	getList1(){
  		this.$http.get('/list').then(res=>{
  			console.log(res)
  		})
  	}
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
