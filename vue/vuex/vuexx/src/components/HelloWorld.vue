<template>
  <div class="hello">
   <!-- {{shuzhu.one}}---{{shuzhu.two}} -->
   <p>getters:{{sendty}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      shuzhu:''
    }
  },
  computed:{
    sendty(){
      return this.$store.getters.sendInfor
    }
  },
  created(){
    //页面之间传值
    this.shuzhu=this.$route.query.message
    console.log("shuzhu", JSON.parse(JSON.stringify(this.shuzhu)))
  }
}
</script>

<style scoped>

</style>
