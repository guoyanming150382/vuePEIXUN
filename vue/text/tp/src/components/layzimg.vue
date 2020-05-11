<template>
	<div id="pp">
		<div v-for="item in img">
			<img v-lazy="item"/>
		</div>
	</div>
</template>
<script>
	 export default {
    data () {
        return {
             img: [
             
            ],
            page:1
        }
    },
    methods:{
    	getdata(){
    		this.$http.get("http://127.0.0.1:3000/oom?page="+this.page).then(res=>{
    			console.log(res.data.data)
    			this.page++
    			this.img.push(...res.data.data)
    		})
    	}
    },
    created(){
    	this.getdata()
    }
 }
</script>
<style scoped>

</style>