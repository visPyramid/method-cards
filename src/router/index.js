import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import Setting from '../views/Setting.vue'
// import Rising from '../views/Rising.vue'
import Gallery from '../views/Gallery.vue'

Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     // UserProfile will be rendered inside User's <router-view>
    //     // when /user/:id/profile is matched
    //     path: 'setting',
    //     component: Setting
    //   },
    //   {
    //     // UserPosts will be rendered inside User's <router-view>
    //     // when /user/:id/posts is matched
    //     path: 'rising',
    //     component: Rising
    //   }
    // ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
//router.replace({ path: '/setting', redirect: '/' })
export default router
