<template>
    <div class="generaldiv">
        <el-row class="headRow">
            <el-col class="first-title" :span='8'>
                <img src="@/assets/logo.png" alt="">
                智能设备管理平台</el-col>
            <el-col :span='4'><div class="info-top"><div class="blue info-but">电表设备总量</div><span class="blue">1,023</span>/台</div></el-col>
            <el-col :span='4'><div class="info-top"><div class="green info-but">智能井盖总量</div><span class="green">2,106</span>/台</div></el-col>
            <el-col :span='4'><div class="info-top"><div class="gray info-but">烟感报警设备总量</div><span class="gray">950</span>/台</div></el-col>
            <el-col :span='4'><div class="info-top"><div class="red info-but">燃气泄漏设备总量</div><span class="red">1,201</span>/台</div></el-col>
        </el-row>
        <el-row class="middleRow">
            <el-col class="leftside">
                <el-row class="outBorder doughnutCharts" >
                    <el-row class="middleLine">
                        <el-col class="dc-col leftLine" :span="12"><doughnut-chart chartId='c01'></doughnut-chart></el-col>
                        <el-col class="dc-col" :span="12"><doughnut-chart chartId='c02'></doughnut-chart></el-col>
                    </el-row>
                    <el-row>
                        <el-col class="dc-col leftLine" :span="12"><doughnut-chart chartId='c03'></doughnut-chart></el-col>
                        <el-col class="dc-col" :span="12"><doughnut-chart chartId='c04'></doughnut-chart></el-col>
                    </el-row>
                </el-row>
                <el-row class="outBorder charTable"><char-table :headInfo='headInfo' :mainInfo='mainInfo'></char-table></el-row>
            </el-col>
            <el-col class="outBorder mapView"><chart-map chartId='c06'></chart-map></el-col>
        </el-row>
        <el-row class="endRow">
            <!-- <el-col class="outBorder barview"> <bar-simple chartId='c05'></bar-simple></el-col> -->
            <el-col class="outBorder lineChartView">
                <el-col :span='6' class="leftLine"><div class="policeTime blue"><span class="mainNum">18</span>/次 今日告警</div><bar-simple chartId='c05'></bar-simple></el-col>
                <el-col :span='6' class="leftLine"><div class="policeTime green"><span class="mainNum">18</span>/次 今日告警</div><line-chart chartId='c07'></line-chart></el-col>
                <el-col :span='6' class="leftLine"><div class="policeTime gray"><span class="mainNum">18</span>/次 今日告警</div><line-chart chartId='c08'></line-chart></el-col>
                <el-col :span='6'>                 <div class="policeTime red"><span class="mainNum">18</span>/次 今日告警</div> <line-chart chartId='c09'></line-chart></el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import doughnutChart from '@/components/charts/doughnut-chart'
import barSimple from '@/components/charts/bar-simple'
import chartMap from '@/components/charts/chart-map'
import lineChart from '@/components/charts/line-chart'
import charTable from '@/components/charts/char-table'
export default {
    components:{doughnutChart,barSimple,chartMap,lineChart,charTable},
    data(){
        return{
            headInfo:[{
                name:'时间',
                type:'time'
                },{
                name:'设备类型',
                type:'type'
                },{
                name:'报警类型',
                type:'policeType'
                },{
                name:'地址',
                type:'address'
                }],
            mainInfo:[{
                time:'8:45',
                type:'电表',
                policeType:'火灾',
                address:'****'
            },{
                time:'8:45',
                type:'电表',
                policeType:'火灾',
                address:'****'
            }]
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>

.generaldiv{
    height: 100%;
    width: 100%;
    min-width: 1526px ;
    min-height: 916px;
    background: rgb(45,62,80);
    background-size: 100% 100%;
    display: flex;
    position: relative;
    flex-direction:column;
    .first-title{
        opacity: 0.8;
        font-family: PingFangSC-Semibold;
        font-size: 25.6px;
        color: #FFFFFF;
        text-align: left;
        line-height: 32px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        img{
            margin-right: 15.6px;
            height:28.2px;
            width: 38.2px;
            width: auto
        }
    }
    .info-top{
        text-align: center;
        line-height: 28px;
        position: relative;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #D8D8D8;
        text-align: center;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        span{
            font-family: PingFangSC-Regular;
            font-size: 22px;
            text-align: right;
            margin-right: 5px;
        }
        
        .info-but{
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #D8D8D8;
            letter-spacing: -0.07px;
            text-align: center;
            width: 88px;
            margin-right: 22px;
            line-height: 22px;
            position: relative;
            &::after{
                content: '';
                height: 34.3px;
                width: 2px;
                position: absolute;
                top: 10px;
                left: 45px;
                transform: rotate(-270deg);
                border-radius: 90px;
            }
            &.green::after{
                background-image: linear-gradient(-180deg, #D4FC79 0%, #96E6A1 95%);
            }
            &.blue::after{
                background-image: linear-gradient(-180deg, #7FFED8 2%, #09BDFE 98%);
            }
            &.gray::after{
                background-image: linear-gradient(-135deg, #EEF2F3 0%, #8E9EAB 100%);
            }
            &.red::after{
                background-image: linear-gradient(-135deg, #FCC687 0%, #F286A0 100%);
            }
        }
    }
    

    .outBorder{
        border: 1px solid #36B09E;
        box-shadow: inset 0 0 12px 3px #36B09E;
    }
    >.el-row{
        width: 100%;
    }
    .headRow{
        color: #fff;
        height: 80px;
        display: flex;
        align-items: center;
        // font-size: 40px
    }
    .middleRow{
        padding: 0 20px;
        display: flex;
        height: calc(65% - 36px);
        .leftside{
            margin-right: 20px;
            width: calc(50% - 60px);
            box-sizing: content-box
        }
        .doughnutCharts{
            height: calc(100% - 230px);
            width: 100%;
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            >.middleLine::after{
                content: '';
                border-top: rgba(54,176,158,0.40) solid 2px;
                position: absolute;
                width: calc(100% - 40px);
                left: 20px;
                bottom: 0
            }
            .el-row{
                width: 100%;
            }
            .dc-col{
                height: 100%;
                width: 50%;
                position: relative;
            }
            .leftLine::after{
                content: '';
                border-left: rgba(54,176,158,0.40) solid 2px;
                position: absolute;
                height: calc(100% - 60px);
                right: 0px;
                top:30px
            }
        }
        .charTable{
            height: 210px;
        }
        .mapView{
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
    .endRow{
        padding: 20px;
        height: calc(35% - 48px);
        display: flex;
        .barview{
            margin-right: 20px;
            width: 550px !important;
            box-sizing: content-box
        }
        .lineChartView{
            flex-grow: 1;
            .el-col{
                position: relative;
                height: 100%;
                display: flex;
                justify-content: center;
                .policeTime{
                    .mainNum{
                        font-size: 24px;
                    }
                    position: absolute;
                    top: 17px;
                    right: 20px;
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    letter-spacing: 1.9px;
                    text-align: right;
                }
            }
            .leftLine{
                position: relative;
                height: 100%;
                &::after{
                    content: '';
                    border-left: rgba(54,176,158,0.40) solid 2px;
                    position: absolute;
                    height: calc(100% - 60px);
                    right: 0px;
                    top:30px
                }
            }
        }
    }
    .blue{
        color: #09BDFE;
    }
    .green{
        color: #96E6A1;
    }
    .gray{
        color: #8E9EAB;
    }
    .red{
        color: #F286A0;
    }
}
</style>

