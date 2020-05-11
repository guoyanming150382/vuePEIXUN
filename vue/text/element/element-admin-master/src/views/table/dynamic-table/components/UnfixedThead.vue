<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="formThead">
        <el-checkbox label="apple">
          apple
        </el-checkbox>
        <el-checkbox label="banana">
          banana
        </el-checkbox>
        <el-checkbox label="orange">
          orange
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="fruitName" width="180" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>




    <div class="three">
      <el-table
    :data="tableData1.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
   <p>--------------------------->-------------------------------------<-----------</p>
   <el-pagination background layout="prev, pager, next" :total=total :page-size=4 :current-page.sync="curpage" @current-change="changepage(curpage)">
     
   </el-pagination>
    </div>

   
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: 'fruit-1',
            apple: 'apple-10',
            banana: 'banana-10',
            orange: 'orange-10'
          },
          {
            name: 'fruit-2',
            apple: 'apple-20',
            banana: 'banana-20',
            orange: 'orange-20'
          },
        ],
        formThead: ['apple', 'banana'],
         tableData1: [],
        search: '',
        curpage:1,total:0,
      }
    },
    methods:{
      getData(){
        this.$http.get('http://127.0.0.1:3000/tablelist').then(res=>{
          // console.log(res)
          // this.tableData1=res.data.data
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      initList(){
        this.$http.get('http://127.0.0.1:3000/tablelist?id='+this.curpage).then(res=>{
            this.tableData1=res.data.data.list
            this.total=res.data.data.total*3
        })
      },
      changepage(page){
        this.curpage=page
        this.initList()
      }
    },
    created(){
      this.getData()
      this.initList()
    }
  }
</script>
<style scoped>
  .three{
    margin: 30px;
  }
</style>