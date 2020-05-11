<template>
  <div id="app">
    <router-link to="/index">首页</router-link>
    <router-link to="/test">2页</router-link>
    <transition name=luyou>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{

  },
  created(){
    
  }
}
</script>

<style>
  .luyou-enter,.luyou-leave-to{
    transform: translateX(200px);
    opacity: 0;
  }
  .luyou-enter-active,.luyou-leave-tactive{
    transition: all 0.5s linear;
    opacity: 1;
  }
</style>
