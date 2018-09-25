<template>
  <div class="mainChart">
    <span class="cName">电表运行状态</span>
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
                    {value:335, name:'正常'},
                    {value:310, name:'离线'},
                    {value:234, name:'低电量'},
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
.mainChart{
  padding-top: 10px;
  padding-left: 10px;
}
.chart{
  width: 215px;
  height: 140px;
}
.cName{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #3CBFA6;
  letter-spacing: 1.9px;
}
</style>
