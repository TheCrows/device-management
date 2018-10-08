<template>
    <div>
        <div class="chart" :id='chartId'></div>
    </div>
</template>
<script>
    import echarts from 'echarts'

    export default {
        props: ['chartId', 'title', 'dataSet'],
        data() {
            return {
                option: {
                    title: {
                        text: this.title,
                        textStyle: {color: '#3CBFA6', fontSize: 15}
                    },
                    color: ['#43D3B1', '#FCC687', '#09BDFE'],
                    textStyle: {
                        height: '30px',
                        width: '30px',
                    },
                    tooltip: {
                        trigger: 'item',
                        position: 'right',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            center: ['55%', 75],
                            radius: ['50%', '60%'],
                            label: {fontSize: 9},
                            labelLine: {
                                normal: {
                                    show: true
                                }
                            },
                            data: this.dataSet
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
    .chart {
        width: 200px;
        height: 120px;
    }
</style>
