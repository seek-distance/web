import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test1 from '@/components/test1'
import test2 from '@/components/test2'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    }
  ]
})


