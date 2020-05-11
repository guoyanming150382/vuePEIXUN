<template>
	<div class="page-loadmore">
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
			<ul>
				<li v-for="item in list">
					<!--下面的图片-->
			    <div class="tu">
			    	<div class="shop-box-item">
			    		<img :src="item.src" alt="">
		            	<p class="title">{{ item.name }}</p>
		            	<p class="money">
		            		<span class="small">￥</span> {{ item.pic }}
		            	</p>
			    	</div>
			    </div>
				</li>
			</ul>
		</mt-loadmore>
	</div>
</template>
<script>
  export default {
    data(){
      return {
        list: [],
        //上拉加载只有，每次++，传到后台，后台判断返回true或false
        page:1
      }
    },
    created(){
    	this.jia()
    },
    methods:{
    	jia(){
    		this.$axios.get('http://127.0.0.1:3000/loadmore>page='+this.page).then(res=>{
    			this.page++;
    			console.log(this.page)
	    		console.log(res.data.data)
	    		this.list = res.data.data
	    	})
    	},
      loadTop(){//下拉加载
      	setTimeout(()=>{
      		this.$refs.loadmore.onTopLoaded();
      	},1000)
      },
      loadBottom(){//上拉刷新
    		setTimeout(()=>{
      		this.jia()
      		this.$refs.loadmore.onBottomLoaded();
      	},1000)
      }
    },
  };
</script>
<style scoped>
	.mint-loadmore-content ul{
		overflow: hidden;
	}
	/*上拉加载*/
	.mint-loadmore-content{
		padding-bottom: 55px;
	}
	/*.mint-loadmore{
		margin-bottom: 50px;
	}*/
	.tu{
		width: 100%;
		height: 100%;
	}
	.tu .shop-box-item{
	    width: 50%;
	    float: left;
	    margin-bottom: 0.24rem;
	    box-sizing: border-box;
	    box-sizing: border-box;
	}
	.tu .shop-box-item img{
		width: 100%;
	}
	.tu .shop-box-item:nth-child(odd){
		padding-right: 2px;
	}
	.tu .shop-box-item:nth-child(even){
		padding-right: 2px;
	}
	
	.tu .shop-box-item .title{
		padding-top: 0.2rem;
    	font-size: .36rem;
    	color: rgba(0, 0, 0, 0.87);
	}
	.tu .shop-box-item .money{
	    font-size: .38rem;
	    color: #ea625b;
	    padding-top: 0.05rem;
	}
</style>