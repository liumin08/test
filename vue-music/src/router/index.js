import Vue from 'vue'
import Router from 'vue-router'
import myRecommend from '@/components/myRecommend/myRecommend'
import mySinger from '@/components/mySinger/mySinger'
import myRank from '@/components/myRank/myRank'
import mySearch from '@/components/mySearch/mySearch'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: myRecommend
    },
    {
      path: '/',
     redirect:"/recommend"
    },
    {
      path: '/singer',
      name: 'singer',
      component: mySinger
    },
    {
      path: '/rank',
      name: 'rank',
      component: myRank
    },
    {
      path: '/search',
      name: 'search',
      component: mySearch
    }
  ]
})
