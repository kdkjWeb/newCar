import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

const applychioce = () => import('@/pages/user/applychioce/applychioce') //选择产品


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'applychioce',
      component: applychioce
    }
  ]
})
