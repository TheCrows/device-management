<template>
  <div class="table">
    <el-row class="t_title">
      <el-col :span="6" v-for='(item,index) in headInfo' :key='"head"+index'>{{item.name}}</el-col>
    </el-row>
      
      <el-row class="t_row" v-for='(item,index) in mainInfo' :key="'row'+index">
        <el-col :span="6" v-for='(sitem,sindex) in headInfo' :key='"col"+sindex'>{{item[sitem.type]}}</el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  props:['headInfo','mainInfo'],
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.table{
  color: #fff;
  .t_title{
    line-height: 30px;
    text-align: center;
    color: rgb(199, 199, 63);
    font-size: 14px
  }
  .t_row{
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    position: relative;
    border-top: solid green 1px;
    color: green
  }
}
</style>


