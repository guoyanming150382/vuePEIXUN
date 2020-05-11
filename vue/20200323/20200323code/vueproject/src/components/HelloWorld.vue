<template>
  <div class="hello">
    <h1>{{ name }}</h1>

    
    <!--<button @click="goAdmin">点击跳转</button>-->
    <button @click="btnclick">点击跳转</button>
  </div>
</template>

<script>
//	import { mixin } from './mixins/mixin'
//export default {
//name: 'HelloWorld',
//	mixins: [mixin],
//data () {
//  return {
//    msg: 'Welcome to Your Vue.js App'
//  }
//},
//mounted(){
//	console.log(mixin)
//},
//methods:{
//	goAdmin(){
//		this.$router.push({
//			path:'/admin'
//		})
//	}
//}
//}
	import mixin from '@/components/mixins/mixin'; // 引入mixin文件
	export default {
	 mixins: [mixin]
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
