<template>
  <div id="app">

  <headera></headera>
    <div class="nativeto">
      <router-link to="/shangpin">商品分类</router-link>
      <router-link to="/pinglun">评价</router-link>
      <router-link to="/shangjia">商家</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import headera from '@/components/headera'
export default {
  name: 'App',
  data(){
    return{}
  },
  components:{
    headera:headera
  }
}
</script>

<style scoped>
#app{
  font-family: "Microsoft YaHei"
}
  .nativeto{
    height: 30px;
    line-height: 30px;
    text-align: center;
    overflow:hidden;
    border-bottom: 1px solid #ddd;
  }
  .nativeto>a{
    height: 100%;
    width: 33.33%;
    float: left;
    text-decoration: none;
  }
  .router-link-exact-active,.router-link-active{
    background: brown;
    color: #fff;
  }
</style>
