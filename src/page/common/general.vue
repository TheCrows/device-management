<template>
    <div class="generaldiv">
        <el-row class="headRow">
            <el-col class="first-title":span='8'>
                <img src="@/assets/logo.png" alt="">
                智能设备管理平台</el-col>
            <el-col :span='4'><div class="info-top"><span class="blue">1,023</span>/台</div><div class="info-but">电表设备总量</div></el-col>
            <el-col :span='4'><div class="info-top"><span class="green">2,106</span>/台</div><div class="info-but">智能井盖总量</div></el-col>
            <el-col :span='4'><div class="info-top"><span class="gray">950</span>/台</div><div class="info-but">烟感报警设备总量</div></el-col>
            <el-col :span='4'><div class="info-top"><span class="red">1,201</span>/台</div><div class="info-but">燃气泄漏设备总量</div></el-col>
        </el-row>
        <el-row class="middleRow">
            <el-col class="leftside">
                <el-row class="outBorder doughnutCharts" >
                    <el-row>
                        <el-col class="dc-col" :span="12"><doughnut-chart chartId='c01'></doughnut-chart></el-col>
                        <el-col class="dc-col" :span="12"><doughnut-chart chartId='c02'></doughnut-chart></el-col>
                    </el-row>
                    <el-row>
                        <el-col class="dc-col" :span="12"><doughnut-chart chartId='c03'></doughnut-chart></el-col>
                        <el-col class="dc-col" :span="12"><doughnut-chart chartId='c04'></doughnut-chart></el-col>
                    </el-row>
                </el-row>
                <el-row class="outBorder charTable"><char-table :headInfo='headInfo' :mainInfo='mainInfo'></char-table></el-row>
            </el-col>
            <el-col class="outBorder mapView"><chart-map chartId='c06'></chart-map></el-col>
        </el-row>
        <el-row class="endRow">
            <el-col class="outBorder barview"> <bar-simple chartId='c05'></bar-simple></el-col>
            <el-col class="outBorder lineChartView">
                <el-col :span='8'><line-chart chartId='c07'></line-chart></el-col>
                <el-col :span='8'><line-chart chartId='c08'></line-chart></el-col>
                <el-col :span='8'><line-chart chartId='c09'></line-chart></el-col>
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
            },{
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
    min-height: 800px;
    background: rgb(45,62,80);
    background-size: 100% 100%;
    display: flex;
    position: relative;
    flex-direction:column;

    .first-title{
        font-size: 24px;
        font-weight: 700;
        padding: 10px 20px;
        img{
            height: 25px;
            width: auto
        }
    }
    .info-top{
        text-align: center;
        line-height: 28px;
        position: relative;
        ::after{
            content: '';
            height: 0;
            width: 60px;
            position: absolute;
            border-top: #36B09E solid 1px;
            bottom: 2px;
            left: 50%;
            margin-left: -25px
        }
    }
    .info-but{
        text-align: center;
        height: 50%;
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
        // font-size: 40px
    }
    .middleRow{
        padding: 0 20px;
        display: flex;
        .leftside{
            margin-right: 20px;
            width: 550px;
            box-sizing: content-box
        }
        .doughnutCharts{
            height: 300px;
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            >.el-row::after{
                content: '';
                border-top: solid green 1px;
                position: absolute;
                width: 300px;
                left: 50%;
                margin-left: -150px;
                bottom: 10px
            }
            .dc-col{
                height: 100%;
            }
        }
        .charTable{
            height: 170px;
        }
        .mapView{
            flex-grow: 1
        }
    }
    
    .endRow{
        padding: 20px;
        height: 210px;
        display: flex;
        .barview{
            margin-right: 20px;
            width: 550px !important;
            box-sizing: content-box
        }
        .lineChartView{
            flex-grow: 1
        }
    }
    .el-col{
        // height: 100%;
    }
}
</style>

