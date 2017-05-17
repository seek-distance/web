import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import tpl from '@/components/tpl'
import tplChild1 from '@/components/tplChild1'
import tplChild2 from '@/components/tplChild2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'hello',
      component: hello
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/tpl',
      name: 'tpl',
      component: tpl,
      children:[
	    {path: '/tplChild2',component: tplChild2},
	    {path: '/tplChild1',component: tplChild1}
	  ]
    }
  ]
})
