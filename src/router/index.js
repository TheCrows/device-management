// 登录
import Login from '@/page/common/login.vue'
import Welcome from '@/page/common/welcome.vue'

import Frame from '@/frame/frame.vue'



export default[
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login }, // 登录
    {
      path: '/back-stage',
      name:'主页',
      component: Frame,
      children:[{
        path: 'welcome',
        name: 'Welcome',
        component: Welcome
      }]
    },
  ]
