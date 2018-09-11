<template>
    <div>
        省 <el-select v-model="provinceId" size="small" placeholder="请选择">
            <el-option
                v-for="item in cData.provData"
                :key="item.id"
                :label="item.name"
                :value="item.id">
                </el-option>
        </el-select>
        市 <el-select v-model="cityId" size="small" placeholder="请选择">
            <el-option
                v-for="item in cData.cityData"
                :key="item.id"
                :label="item.name"
                :value="item.id">
                </el-option>
        </el-select>
        区 <el-select v-model="districtId" size="small" placeholder="请选择">
            <el-option
                v-for="item in cData.areaData"
                :key="item.id"
                :label="item.name"
                :value="item.id">
                </el-option>
        </el-select>
    </div>
</template>
<script>
import cityData from '@/assets/city-data'
import freightVue from '../page/goods/freight.vue';
export default {
    props:['placeData'],
    data(){
        return{
            // province:'',
            // city:'',
            // district:'',
            provinceId:'',
            cityId:'',
            districtId:'',
            cData:{
                provData:[],
                cityData:[],
                areaData:[],
            },
        }
    },
    computed:{
        province(){
            return this.provinceId?cityData[this.provinceId][0]:''
        },
        city(){
            return this.cityId?cityData[this.cityId][0]:''
        },
        district(){
            return this.districtId?cityData[this.districtId][0]:''
        }
    },
    created(){
        let _that=this
        for(let i in cityData){
                if(cityData[i][1] == "1")
                {
                    this.cData.provData.push({
                        name:cityData[i][0],
                        id:i
                    })
                }
            }
        new Promise((res,rej)=>{
            this.provinceId=this.placeData.provinceId
            res()
        }).then(()=>{
            return new Promise((res,rej)=>{
            this.cityId=this.placeData.cityId
            res()
            })
        }).then(()=>{
            this.districtId=this.placeData.districtId
        })
        // this.provinceId=this.placeData.provinceId
        // this.cityId=this.placeData.cityId
        // this.districtId=this.placeData.districtId
    },
    watch:{
        provinceId(newData,oldData){
            this.cData.cityData=[]
            this.cityId=''
            this.districtId=''
            for(let i in cityData){
                if(cityData[i][1] == newData)
                {
                    this.cData.cityData.push({
                        name:cityData[i][0],
                        id:i
                    })
                }
            }
        },
        cityId(newData,oldData){
            this.cData.areaData=[]
            this.districtId=''
            for(let i in cityData){
                if(cityData[i][1] == newData)
                {
                    this.cData.areaData.push({
                        name:cityData[i][0],
                        id:i
                    })
                }
            }
        }
    },
    methods:{
        handleChange(...msg){
            console.log(msg);
            
        }
    }
}
</script>
<style lang="scss">

</style>
