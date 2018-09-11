<template>
    <div>
        <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item  v-for="item in value" :index="item.name" :key="item.name" @click='selectTop(item.children)'>{{item.name}}</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    props:['value'],
    methods:{
        selectTop:function(msg){
            this.$emit()
            
        }
    }
}
</script>
