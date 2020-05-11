<template>
	<div class="all">
		<ul
		v-infinite-scroll="loadMore"
		infinite-scroll-disabled="loading"
		infinite-scroll-distance="10">
		<li v-for="item in list">{{ item }}</li>
	</ul>
</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				list:[],
				loading:true,
				page:1,
			}
		},
		methods:{
			loadMore() {
				Indicator.open({
				  text: 'Loading...',
				  spinnerType: 'fading-circle'
				});
				setTimeout(() => {
					
					this.getdata()
				}, 2000);
			},
			getdata(){
				this.$http.get('http://127.0.0.1:3000/loadmore?page='+this.page).then(res=>{
					console.log(res.data)
					console.log(res.data.status)
					console.log(this.page)
					if(res.data.status){
						Indicator.close()
						this.loading = false;
						this.page++
						this.list.push(...res.data.data)
					}else{
						this.loading=true
						Indicator.open({
							  text: '加载完毕',
							  spinnerType: 'fading-circle'
							});
						setTimeout(()=>{
							Indicator.close()
						})
					}
				})
			}
		},
		created(){
			this.getdata()
		}
	}
</script>
<style scoped>
.all{
	margin-bottom: 55px;
	background: red;
}
.boott{
	color: red;
	display: none;
}
</style>