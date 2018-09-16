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
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
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
  height: 100px;
}
</style>
