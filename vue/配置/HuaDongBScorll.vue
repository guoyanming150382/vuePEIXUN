<template>
	<div>
		<div ref="wrapper">
			<!-- /* 这里是父盒子*/-->
			<ul class="cont" ref="cont">
				<!--/* 这里是子盒子，即滚动区域*/-->
				<li class="cont-item" v-for="(item,index) in recommendList" :key="item.id">
					<div class="">
						<img class="img" :src="item.url" :alt="item.text" width="200px" height="100px">
					</div>
				</li>
			</ul>
		</div>
	</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				recommendList: [{
						ulr: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2166193600,4079112852&fm=26&gp=0.jpg'
					},
					{
						ulr: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2166193600,4079112852&fm=26&gp=0.jpg'
					},
					{
						ulr: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2166193600,4079112852&fm=26&gp=0.jpg'
					},
					{
						ulr: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2166193600,4079112852&fm=26&gp=0.jpg'
					},
					{
						ulr: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2166193600,4079112852&fm=26&gp=0.jpg'
					},
					{
						ulr: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2166193600,4079112852&fm=26&gp=0.jpg'
					}
				]
			}
		},
		methods: {
			dong() {
				let width = this.recommendList.length * 200 // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
				console.log(width)
				this.$refs.cont.style.width = width + 'px' // 修改滚动区域的宽度
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
//							startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
							scrollX: true,
							scrollY: false,
//							eventPassthrough: 'vertical'
						})
					}else {
						this.scroll.refresh() //如果dom结构发生改变调用该方法
					}
				})
			}
		},
		mounted(){
			this.dong()
		}
	}
</script>

<style>
	
    .cont {
      list-style: none;
      /*overflow-x: scroll;*/  
      white-space: nowrap;
      font-size: 12px;
      text-align: center;
      padding-right: 20px;
  	}
    .cont-item {
        position: relative;
        display: inline-block;
        padding: 10px 0 20px;
        width: 200px;
        /*margin: 0 .1rem;*/
    }
</style>
