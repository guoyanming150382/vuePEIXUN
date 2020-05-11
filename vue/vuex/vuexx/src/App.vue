<template>
  <div id="app">
    <hr>
    <button @click="gaibian">mutations</button>
    <h1>vuex</h1>
    name:{{$store.state.name}}
    name1:{{$store.state.name1}}
    name2:{{$store.state.name2}}
    name3:{{$store.state.name2}}
    <br>
    <div v-for="item in arr" >
      <li>{{item.name}}++++++{{item.old}}</li>
    </div>
    <button @click="style1z">传值</button>
    <hr>
    <router-view/>
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
export default {
    name: 'App',
    data(){
      return{
        arr:[]
      }
    },
    components:{
      HelloWorld:HelloWorld
    },
    methods:{
      gaibian(){
        this.$store.commit('change')
      },
      send(){
        this.$store.commit('send',{tianjie:"波尔修斯"})
      },
      style1z(){
        this.$store.commit({
          type:'styleZ',
          payload:{
            one:"yi",
            two:"er"
          }
        })
      },
      setVue(){
        this.$store.dispatch('firstAXC',{name:"阿萨德"})
      }
    },
    created(){
      this.arr=this.$store.state.wyp
      this.send()
      this.setVue()
    }
}
</script>

<style>
  li{
    list-style: none;
  }
</style>
