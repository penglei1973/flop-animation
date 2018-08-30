import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const HelloWorld = (resolve) => {
  import ('@/components/HelloWorld').then((module) => {
    resolve(module)
  })
}

let router=  new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})

export default router
