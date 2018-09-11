<template>
    <div>
        <el-menu>
          <el-menu-item v-for="item in value" :index="item.id" :key="item.name" @click="changeRoute(item.value)">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    props:['value'],
    methods:{
        changeRoute(msg){
            this.$router.push({ path: `${msg}` })
        }
    }
}
</script>
