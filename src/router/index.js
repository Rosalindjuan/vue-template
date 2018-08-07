import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import GameIndex from '@/page/GameIndex'
import Home from '@/page/home/Home'
import Lobby from '@/page/game/Lobby'
import GamePK10 from '@/page/game/GamePK10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      redirect: '/home',
      children: [
        {path: 'home', component: Home, meta: {pageTitle: '首页'}}
      ]
    },
    // {path: '/lobby', component: Lobby, meta: {pageTitle: '优惠活动', requireAuth: true}},
    {
      path: '/lobby',
      name: '游戏大厅',
      component: GameIndex,
      children: [
        {path: '/', component: Lobby, meta: {pageTitle: '游戏'}},
        {path: '/pk10', component: GamePK10, meta: {pageTitle: 'GamePK10'}}
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
