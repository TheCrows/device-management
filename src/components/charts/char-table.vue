<template>
  <div class="table">
    <el-row>
      <el-col :span="6" v-for='(item,index) in headInfo' :key='"head"+index'>{{item.name}}</el-col>
    </el-row>
      
      <el-row v-for='(item,index) in mainInfo' :key="'row'+index">
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
  color: #fff
}
</style>


