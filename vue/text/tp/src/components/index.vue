<template>
  <div class="hello">
    <lunbo/>
    <search/>
    <navv/>
    <goods/>
  </div>
</template>

<script>
  import Swiper from "swiper";
import lunbo from '@/components/lubo'
import navv from '@/components/nav'
import search from '@/components/searcobj'
import goods from '@/components/goods'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components:{
    lunbo:lunbo,
    navv:navv,
    search:search,
    goods:goods
  }
}
</script>
<style scoped>

</style>
