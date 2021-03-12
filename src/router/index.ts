import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import stauth from '../store/stauth'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  }, 

  {
    path: '/main',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  const loggedIn = stauth.state.auth.Target

    if (to.path != '/auth' && loggedIn.length == 0) {
      next('/auth');
    } else {
      next();
    }
  })


export default router 



