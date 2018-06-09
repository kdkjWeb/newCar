import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

const applyChoice = () => import('@/pages/user/applyChoice/applyChoice') //选择产品


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'applyChoice',
      component: applyChoice
    }
  ]
})
