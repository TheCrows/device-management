import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    frameData:[],
    userInfo:'',//用户信息
    dragState:0,//拖动状态,已弃用
    //活动模板
    modelList:new Set([])
    
  },
  mutations:{
    resetMList(state){
      state.modelList=new Set([])
    },
    deleteMList(state,result){
      let targetList=state.modelList
      targetList.delete(result)
      state.modelList=new Set(targetList)
    },
    addMList(state,result){
      state.modelList=new Set(state.modelList).add(result)
    },
  }
})

export default store