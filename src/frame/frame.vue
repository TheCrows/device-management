<template>
  <el-container>
    <el-header v-loading.fullscreen.lock="fullscreenLoading">
      <!-- 头部 -->
      <!-- <TopMenuNav :value='bData'></TopMenuNav> -->
      <el-menu mode="horizontal" :default-active="activeIndex"  background-color="#545c64" text-color="#fff" active-text-color="#909dcb">
          <el-menu-item  v-for="item in bData" :index="item.value" :key="item.id" @click='selectTop(item.childList)'>{{item.name}}</el-menu-item>
      </el-menu>
      <div class="username">欢迎您, {{user}}</div>
      <el-button icon="el-icon-d-arrow-right" size="mini" circle class="logout" @click="logout"></el-button>
    </el-header>
    <el-container>
      <el-aside width="200px" >
        <!-- 侧边 -->
         <SidebarMenu :value='sideData'></SidebarMenu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// 顶部导航菜单
// import TopMenuNav from '@/page/common/top-menu-nav.vue'
// 侧边栏菜单
import SidebarMenu from '@/page/common/sidebar-menu.vue'
export default {
  components: {
    SidebarMenu,
    // TopMenuNav
  },
  data(){
    return{
      fullscreenLoading:false,
      bData:[],
      sideData:[],
      parentIndex:'',
      user:''
    }
  },
  created(){
    this.user=localStorage.getItem(`userName`)
    let rout=this.$route.path.split('/')
    let pindex=`/${rout[1]}/${rout[2]}`
    this.activeIndex=pindex
    let _that=this
    
    
    // this.bData=this.$store.state.frameData[0].childList
    // this.sideData=this.bData[0].childList
    },
    mounted(){
      
      
    },
  methods:{
    selectTop:function(msg){
      this.$router.push({ path: `${msg[0].value}` })
      this.sideData=msg
    },
    logout(){
      let _that=this
      this.$confirm('确认注销?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
                _that.$router.push('/')
        }).catch(() => {});
    }
  }
}
</script>
<style lang="scss">
.el-container{
  height: 100%;
  overflow: auto;
}
.el-header{
  padding: 0 !important
}
.el-aside{
  border-right: solid 1px #e6e6e6;
}
.el-menu{
  border-right:none
}
.logout{
  position: absolute;
  top:14px;
  right:14px;
}
.username{
      position: absolute;
    top: 0;
    right: 61px;
    color: white;
    line-height: 60px;
    font-size: 16px;
}
</style>


