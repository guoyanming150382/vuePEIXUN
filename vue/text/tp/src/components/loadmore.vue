<template>
	<div id="loadmore">
		loadmore
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul class="more">
				<li v-for="item in list">{{ item }}</li>
			</ul>
		</mt-loadmore>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[],
				allLoaded:false,
				page:1
			}
		},
		methods:{
			getdata(){
				this.$http.get('http://127.0.0.1:3000/loadmore?page='+this.page).then(res=>{
					console.log(res.data.data)
					console.log(this.page)
					console.log(this.allLoaded)
					if(res.data.status){
						this.page++
						this.list.push(...res.data.data)
					}else{
						this.allLoaded=true
					}
				})
			},
			loadBottom() {
			  this.allLoaded = false;// if all data are loaded
			  this.$refs.loadmore.onBottomLoaded();
			  this.getdata()
			}
		},
		created(){
			this.getdata()
		},
	}
</script>
<style scoped>
#loadmore{
	height: 80%;
}
.more li{
	background-color: red;
	text-align: center;
	font-size: 20px;
}
</style>