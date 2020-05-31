import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve =>require(['@/components/home/Home.vue'],resolve)
    },
    {
      path: '/senior',
      name: 'Senior',
      component: resolve => require(['@/components/senior/Senior.vue'], resolve)
    },
    {
      path: '/synthesize',
      name: 'Synthesize',
      component: resolve => require(['@/components/synthesize/Synthesize.vue'], resolve)
    }
  ]
})
