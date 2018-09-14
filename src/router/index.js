// 登录
import General from '@/page/common/general.vue'
import Welcome from '@/page/common/welcome.vue'

import Frame from '@/frame/frame.vue'



export default[
  { path: '/', redirect: '/general' },
  { path: '/general', component: General }, // 登录
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
