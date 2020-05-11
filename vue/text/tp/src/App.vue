<template>
  <div id="app">
    <router-view/>
    <First/>
  </div>
</template>

<script>
  import First from '@/components/first'

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components:{
    First:First
  }
}
</script>

<style>


</style>
