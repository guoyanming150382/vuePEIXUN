<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    
   </div>
</template>

<script>
import { Toast,Indicator } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
//	Toast('提示信息')
//	Toast({
//		  message: '提示',
//		  position: 'bottom',
//		  duration: 500
//		})
//		let instance = Toast('提示信息');
//		setTimeout(() => {
//		  instance.close();
//		}, 2000);
//		let instance = Toast('提示信息')
//		axios.get(url).then(res=>{
//			if(code==200){
//				instance.close()
//			}
//		})
//		Toast({
//    message: '修改成功',
//     iconClass: 'icon iconfont icon-xuanzhong'
//		})
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			})
			setTimeout(function(){
				Indicator.close()
			},2000)
  }
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
