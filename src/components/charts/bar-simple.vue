<template>
  <div>
    <div class="chart" :id='chartId'></div>
  </div>
  
</template>
<script>
import echarts from 'echarts'
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
    let myChart = echarts.init(document.getElementById(this.chartId));
    myChart.setOption(this.option);
  }
}
</script>
<style lang="scss" scoped>
.chart{
  height: 150px;
}
</style>