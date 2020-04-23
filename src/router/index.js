import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import classroom from '@/components/classroom.vue'
import DataStatistics from '@/components/DataStatistics.vue'
import login from '@/components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: classroom
    },
    {
      path: '/DataStatistics',
      name: 'DataStatistics',
      component: DataStatistics
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
