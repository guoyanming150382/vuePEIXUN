<template>
  <div>
   <mt-datetime-picker
   type="date"
   ref="picker"
   year-format="{value} 年"
   month-format="{value} 月"
   date-format="{value} 日"
   @confirm="handleConfirm"
   :startDate="startDate" 
   >
 </mt-datetime-picker>
 <div class="birth">
  <div @click="openPicker" class="ppp"><span>出生日期:</span>{{birthday}}</div>
</div>
<!-- 通讯 -->
<div>
  <mt-index-list >
    <mt-index-section v-for="item in citys.city" :index="item.title" :key="item" class="spp">
      <mt-cell v-for="son in item.lists" :title="son" :key="item" class="spp1" ref="msgg"></mt-cell>
    </mt-index-section>
  </mt-index-list>
</div>
</div>
</template>

<script>
	import { DatetimePicker,IndexList, IndexSection } from 'mint-ui';
  import jsonData from '../assets/city.json'
  export default {
  	data(){
  		return{
  			birthday:"",  //出生日期
        startDate: new Date('1968-01-01'),
        citys:jsonData
      }
    },
    methods: {
      getDate(data){
        var year=data.getFullYear();
        var month=data.getMonth()+1;
        var date=data.getDate();
        // var hour=data.getHours();
        // var minute=data.getMinutes();
        // var second=data.getSeconds();
        return year+"-"+month+"-"+date;
      },
      openPicker () {
       this.$refs.picker.open()
     },
     handleConfirm (data) {
      this.birthday = this.$options.methods.getDate(data)
    },
  },

};
</script>

<style scoped>
.ppp{
  background: red;
  color: #fff;
  text-align: center;
  line-height: 30px;
  display: block;
}
.spp{
  color:brown;
  font-size: 16px;
  padding: 0px 10px;
}
.spp1{
  padding:0px 20px;
  color: #333;
  font-size: 12px;
}
</style>