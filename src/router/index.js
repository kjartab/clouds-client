import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import Hello from '@/components/Hello'
import MapboxVC from '@/components/MapboxVC'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: window.location.href,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Overview
    },
    {
      path: '/test2',
      name: 'Overview',
      component: Hello
    },
    {
      path: '/map',
      name: 'Overview',
      component: MapboxVC
    }
  ]
})
