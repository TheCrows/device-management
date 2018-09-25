<template>
  <div class="table">
    <span class="cName">烟感设备状态</span>
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
  padding: 10px;
  .t_title{
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FCEF87;
    letter-spacing: 0;
    line-height: 48px;
  }
  .t_row{
    line-height: 48px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #3CBFA6;
    letter-spacing: 0;
    text-align: left;
    border-top: rgba(54,176,158,0.40) solid 2px
  }
  .cName{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #3CBFA6;
    letter-spacing: 1.9px;
    line-height: 32px
  }
}
</style>


