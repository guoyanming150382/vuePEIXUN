// mixin这个使用的场景vuex
export default {
 data() {
  return {
   name: '我是姓名'
  }
 },
 created() {
  console.log('mixin...', this.name);
 },
 mounted() {},
 methods: {
 	btnclick(){
 		alert(11)
 	}
 }
}