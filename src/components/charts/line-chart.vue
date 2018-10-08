<template>
    <div style="position: relative">
        <div class="warning" :class="chartId"><span>18</span>&nbsp;/&nbsp;次&nbsp;&nbsp;今日告警</div>
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
                        textStyle: {color: '#3CBFA6', fontSize: 15},
                    },
                    color: ['#F35D84', '#FCEF87', '#09BDFE'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '5%',
                        bottom: '1%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
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
                    series: [
                        {
                            name: '正常',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle', symbolSize: 1,
                            data: [20, 25, 50, 30, 15, 36, 5],
                            areaStyle: {
                                color: {
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{offset: 0, color: 'rgba(243,93,132,.5)'}, {offset: .95, color: 'rgba(243,93,132,.03)'}]
                                }
                            }
                        },
                        {
                            name: '离线',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle', symbolSize: 1,
                            data: [10, 15, 35, 45, 5, 21, 15],
                            areaStyle: {
                                color: {
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{offset: 0, color: 'rgba(252,239,135,.5)'}, {offset: .95, color: 'rgba(252,239,135,.03)'}]
                                }
                            }
                        },
                        {
                            name: '低电量',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle', symbolSize: 1,
                            data: [60, 65, 81, 55, 65, 52, 68],
                            areaStyle: {
                                color: {
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{offset: 0, color: 'rgba(9,189,254,.5)'}, {offset: 0.95, color: 'rgba(9,189,254,.03)'}]
                                }
                            }
                        }
                    ]
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
        font-size: 14px;
        position: absolute;
        > span {
            font-size: 24px;
        }

        &.c08 {
            color: #FCEF87;
        }
        &.c09 {
            color: #F35D84;
        }
    }

    .chart {
        height: 100%;
    }
</style>
