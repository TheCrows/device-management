<template>
    <div class="generaldiv">
        <div class="headRow">
            <div class="first-title">
                <div style="text-align: left"><img src="@/assets/logo.png" alt="">智能设备管理平台</div>
            </div>
            <div>
                <div class="info-left one">电表设备总量</div>
                <div class="info-right"><span class="color1">1,023</span>/台</div>
            </div>
            <div>
                <div class="info-left two">智能井盖总量</div>
                <div class="info-right"><span class="color2">2,106</span>/台</div>
            </div>
            <div>
                <div class="info-left three">烟感报警设备总量</div>
                <div class="info-right"><span class="color3">950</span>/台</div>
            </div>
            <div>
                <div class="info-left four">燃气泄漏设备总量</div>
                <div class="info-right"><span class="color4">1,201</span>/台</div>
            </div>
        </div>
        <div class="middleRow">
            <div class="leftside">
                <div class="outBorder doughnutCharts">
                    <div class="dc-col">
                        <doughnut-chart chartId='c01' title="电表运行状态" :dataSet="firstList"></doughnut-chart>
                    </div>
                    <div class="dc-col">
                        <doughnut-chart chartId='c02' title="智能井盖状态" :dataSet="secondList"></doughnut-chart>
                    </div>
                    <div class="dc-col">
                        <doughnut-chart chartId='c03' title="烟感设备状态" :dataSet="thirdList"></doughnut-chart>
                    </div>
                    <div class="dc-col">
                        <doughnut-chart chartId='c04' title="燃气设备状态" :dataSet="fourthList"></doughnut-chart>
                    </div>
                </div>
                <div class="outBorder charTable">
                    <char-table :mainInfo='mainInfo'></char-table>
                </div>
            </div>
            <div class="outBorder mapView">
                <chart-map chartId='c06'></chart-map>
            </div>
        </div>
        <div class="endRow">
            <div class="outBorder">
                <bar-simple chartId='c05' title="电量图" ></bar-simple>
                <line-chart chartId='c07' title="井盖告警" ></line-chart>
                <line-chart chartId='c08' title="烟感报警" ></line-chart>
                <line-chart chartId='c09' title="燃气泄露报警" ></line-chart>
            </div>
        </div>
    </div>
</template>
<script>
    import doughnutChart from '@/components/charts/doughnut-chart'
    import barSimple from '@/components/charts/bar-simple'
    import chartMap from '@/components/charts/chart-map'
    import lineChart from '@/components/charts/line-chart'
    import charTable from '@/components/charts/char-table'

    export default {
        components: {doughnutChart, barSimple, chartMap, lineChart, charTable},
        data() {
            return {
                firstList: [
                    {value: 45, name: '正常'},
                    {value: 55, name: '离线'},
                ],
                secondList: [
                    {value: 20, name: '正常'},
                    {value: 32, name: '低电量'},
                    {value: 48, name: '离线'},
                ],
                thirdList: [
                    {value: 28, name: '正常'},
                    {value: 32, name: '低电量'},
                    {value: 40, name: '离线'},
                ],
                fourthList: [
                    {value: 28, name: '正常'},
                    {value: 32, name: '低电量'},
                    {value: 40, name: '离线'},
                ],
                mainInfo: [{
                    time: '8:45',
                    type: '电表',
                    policeType: '离线',
                    address: 'XXXXX'
                }, {
                    time: '8:21',
                    type: '烟感',
                    policeType: '低电量',
                    address: '****'
                }]
            }
        },
        methods: {}
}
</script>
<style lang="scss" scoped>

.generaldiv{
    height: 100%;
    width: 100%;
    min-height: 800px;
    background: rgb(45,62,80);
    background-size: 100% 100%;
    display: flex;
    position: relative;
    flex-direction:column;

    .outBorder {
        color: #3CBFA6;
        padding: 20px;
        border: 1px solid #36B09E;
        box-shadow: inset 0 0 12px 3px #36B09E;
    }

    > .el-row {
        width: 100%;
    }

    .headRow {
        display: flex;
        color: #D8D8D8;
        font-size: 11px;
        margin: 21px 24px;
        max-width: 1366px;

        .first-title {
            display: flex;
            justify-content: start;
            min-width: 427px;
            font-size: 24px;
            font-weight: 700;
            line-height: 30px;
            img {
                width: auto;
                height: 25px;
                line-height: 30px;
                margin-right: 15px;
                vertical-align: middle;
            }
        }

        > div {
            display: flex;
            flex-basis: 50%;
            align-items: center;
            justify-content: center;
            > div {
                margin: auto 8px;
                line-height: 30px;
            }
        }
        .info-left {
            margin-top: 0;
            color: #D8D8D8;
            font-size: 10px;
            text-align: center;
            position: relative;
            letter-spacing: -0.07px;
            font-family: PingFangSC-Regular;

            &:after {
                left: calc(50% - 20px);
                bottom: 0;
                width: 40px;
                content: '';
                height: 2px;
                border-radius: 4px;
                position: absolute;
                display: inline-block;
                background-image: linear-gradient(-90deg, #7FFED8 2%, #09BDFE 98%);
            }
            &.two:after {
                background-image: linear-gradient(-90deg, #D4FC79 0%, #96E6A1 95%);
            }
            &.three:after {
                background-image: linear-gradient(-90deg, #EEF2F3 0%, #8E9EAB 100%);
            }
            &.four:after {
                background-image: linear-gradient(-90deg, #FCC687 0%, #F286A0 100%);
            }
        }
        .info-right {
            span {
                &.color1 {
                    color: #09BDFE;
                }
                &.color2 {
                    color: #96E6A1;
                }
                &.color3 {
                    color: #8E9EAB;
                }
                &.color4 {
                    color: #F286A0;
                }
                line-height: 35px;
                font-size: 22px;
                margin-right: 4px;
                vertical-align: top;
                font-family: PingFangSC-Regular;
            }
        }

    }
    .middleRow{
        padding: 0 20px;
        display: flex;
        .leftside{
            width: 430px;
            margin-right: 20px;
            box-sizing: content-box
        }
        .doughnutCharts{
            height: 280px;
            padding: 8px 5px;
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            position: relative;

            > div:first-child:after {
                left: 5%;
                bottom: 50%;
                width: 90%;
                height: 2px;
                content: '';
                position: absolute;
                border-radius: 2px;
                background-color: rgba(54, 176, 158, .4);
            }
            .dc-col{
                flex-basis: 50%;
            }
        }
        .charTable{
            height: 180px;
            overflow: hidden;
        }
        .mapView{
            flex-grow: 1
        }
    }

    .endRow {
        padding: 20px;
        height: 210px;
        .outBorder {
            height: 168px;
            display: flex;
            > div {
                flex-basis: 25%;
            }
        }
    }
}
</style>

