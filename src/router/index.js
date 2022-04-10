import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/download',
    component:()=>import(/* webpackChunkName: "download" */ '../components/Download'),
  },
  { path: '*', redirect: '/home/discover' },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../components/Home'),
    children: [

      {
        path: 'discover',
        component: () => import(/* webpackChunkName: "home" */ '../components/Home/Discover')
      },
      {
        path: 'toplist/:id?',
        component: () => import(/* webpackChunkName: "home" */ '../components/Home/TopList')
      },
      {
        path:'playlist',
        component:()=>import(/* webpackChunkName: "home" */ '../components/Home/PlayList'),
      },
      {
        path: 'djradio',
        component: () => import(/* webpackChunkName: "home" */ '../components/Home/DjRadio')
      },
      {
        path: 'artist',
        component: () => import(/* webpackChunkName: "home" */ '../components/Home/Artist')
      },
      {
        path: 'album',
        component: () => import(/* webpackChunkName: "home" */ '../components/Home/Album')
      },
      {
        path:'download',
        component:()=>import(/* webpackChunkName: "home" */ '../components/Download'),
      }
    ]
  },
  {
    path: '/mymusic',
    component: () => import(/* webpackChunkName: "mymusic" */ '../components/MyMusic'),
    children: [
      {
        path: 'playlist',
        component: () => import(/* webpackChunkName: "mymusic" */ '../components/MyMusic/Logged/Playlist')
      }
    ]
  },
  { 
    path: '/friend',
    component: () => import(/* webpackChunkName: "friend" */ '../components/Friend'),
  },
  { 
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '../components/User'),
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "user" */ '../components/User/Home'),
      },
      {
        path: 'level',
        component: () => import(/* webpackChunkName: "user" */ '../components/User/Level'),
      }
    ]
  },
  {
    path: '/playlist/:key?',
    component: () => import(/* webpackChunkName: "playlist" */ '../components/PlayList'),
  },
  {
    path: '/search',
    component: () => import(/* webpackChunkName: "search" */ '../components/Search'),
  },
  { 
    path: '/song',
    component: () => import(/* webpackChunkName: "song" */ '../components/Song'),
  },
  { 
    path: '/artist',
    component: () => import(/* webpackChunkName: "artist" */ '../components/Artist'),
    children: [
      {
        path: 'song',
        component: () => import(/* webpackChunkName: "artist" */ '../components/Artist/MainerLeft/Song'),
      },
      {
        path: 'album',
        component: () => import(/* webpackChunkName: "artist" */ '../components/Artist/MainerLeft/Album'),
      },
      {
        path: 'mv',
        component: () => import(/* webpackChunkName: "artist" */ '../components/Artist/MainerLeft/Mv'),
      },
      {
        path: 'desc',
        component: () => import(/* webpackChunkName: "artist" */ '../components/Artist/MainerLeft/Desc'),
      },
    ]
  },
  {
    path: '/album',
    component: () => import(/* webpackChunkName: "album" */ '../components/Album'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    //返回的这个y=0，代表滚动条在最上方
    return { y: 0 };
}
})

export default router
