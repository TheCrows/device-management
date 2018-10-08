<template>
    <div style="position: relative">
        <div class="warning"><span>18</span>&nbsp;/&nbsp;次&nbsp;&nbsp;今日告警</div>
        <div class="chart" :id='chartId'></div>
    </div>

</template>
<script>
    import echarts from 'echarts'

    export default {
        props: ['chartId', 'title'],
        data() {
            return {
                option: {
                    title: {
                        text: this.title,
                        textStyle: {color: '#3CBFA6', fontSize: 15}
                    },
                    color: ['#F35D84', '#FCEF87', '#09BDFE'],
                    tooltip: {
                        trigger: 'item'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '1%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        nameTextStyle: {fontSize: 9},
                        axisLine: {lineStyle: {color: 'transparent'}},
                        axisLabel: {interval: 0, fontSize: 9, color: '#a6a7aa'},
                        data: ['8月11日', '8月12日', '8月13日', '8月14日', '8月15日', '8月16日', '8月17日']
                    },
                    yAxis: {
                        type: 'value',
                        splitNumber: 3,
                        splitLine: {show: false},
                        axisLine: {lineStyle: {color: 'transparent'}},
                        axisLabel: {interval: 0, fontSize: 9, color: '#a6a7aa'},
                    },
                    series: [{
                        type: 'bar',
                        barWidth: 18,
                        data: [120, 200, 150, 80, 70, 110, 130],
                        itemStyle: {
                            color: {
                                type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                colorStops: [{offset: 0, color: '#8FF379'}, {offset: 1, color: '#1CBDB4'}]
                            },
                            barBorderRadius: 2
                        }
                    }]
                }
            }
        },
        mounted() {
            let myChart = echarts.init(document.getElementById(this.chartId));
            myChart.setOption(this.option);
        }
    }
</script>
<style lang="scss" scoped>
    .warning {
        right: 5%;
        z-index: 2;
        color: #09BDFE;
        font-size: 14px;
        position: absolute;
        > span {
            font-size: 24px;
        }
    }
    .chart {
        height: 100%;
    }
</style>
