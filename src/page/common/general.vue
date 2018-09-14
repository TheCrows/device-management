<template>
    <div class="generaldiv">
        <el-row class="headRow">
            <el-col :span='8'>智能设备管理平台</el-col>
            <el-col :span='4'>1,023/台</el-col>
            <el-col :span='4'>1,023/台</el-col>
            <el-col :span='4'>1,023/台</el-col>
            <el-col :span='4'>1,023/台</el-col>
        </el-row>
        <el-row class="middleRow">
            <el-col :span='8' class="">
                <el-row>
                    <el-row>
                        <el-col :span="12"><doughnut-chart chartId='c01'></doughnut-chart></el-col>
                        <el-col :span="12"><doughnut-chart chartId='c02'></doughnut-chart></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12"><doughnut-chart chartId='c03'></doughnut-chart></el-col>
                        <el-col :span="12"><doughnut-chart chartId='c04'></doughnut-chart></el-col>
                    </el-row>
                </el-row>
                <el-row><char-table :headInfo='headInfo' :mainInfo='mainInfo'></char-table></el-row>
            </el-col>
            <el-col :span='16'><chart-map chartId='c06'></chart-map></el-col>
        </el-row>
        <el-row class="endRow">
            <el-col :span='8'> <bar-simple chartId='c05'></bar-simple></el-col>
            <el-col :span='16'>
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
    background: radial-gradient(at 200px 100px, #000000, #4a89cc);
    // background: url(../../assets/background.jpg) no-repeat center 0;
    background-size: 100% 100%;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    flex-direction:column;
    >.el-row{
        width: 100%;
    }
    .headRow{
        height: 80px;
        background: #dddddd36;
        color: #fff;
        // font-size: 40px
    }
    .middleRow{
        flex-grow: 1;
        background: #dbd5d536
    }
    .endRow{
        height: 200px;
        background: #dfbfbf36
    }
    .el-col{
        height: 100%;
    }
}
</style>

