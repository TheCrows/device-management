<template>
  <div class="mainChart">
    <span class="cName">电量折线图</span>
    <div class="chart" :id='chartId'></div>
  </div>
  
</template>
<script>
import echarts from 'echarts'
import theme from '@/assets/dark'
echarts.registerTheme('dark', theme);
export default {
  props:['chartId'],
  data(){
    return{
      option:{
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
        }
    }
  },
  mounted(){
    let myChart = echarts.init(document.getElementById(this.chartId),'dark');
    myChart.setOption(this.option);
  }
}
</script>
<style lang="scss" scoped>
.chart{
  height: 200px;
  width: 340px
}
.mainChart{
  padding-top: 10px;
  padding-left: 10px;
}
.cName{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #3CBFA6;
  letter-spacing: 1.9px;
}
</style>