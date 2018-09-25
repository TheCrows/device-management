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
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
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
  height: 180px;
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