import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as API from '@/common/js/api.js'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
// import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.component(Button.name, Button, Select.name, Select)

Vue.config.productionTip = false
Vue.use(ElementUI)
import atm from '@/assets/lazyload.gif'
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  // 懒加载默认的图片
  loading:atm,
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    //组件实例的原型的 原型指向的是prototype对象
    Vue.prototype.$API = API;
  },
}).$mount('#app')
