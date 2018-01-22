import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Index from '@/views/index'
import Write from '@/views/write'
import Post from '@/views/post'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/write',
      name: 'writepost',
      component: Write
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  next()
})
