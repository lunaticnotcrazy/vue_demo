import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store/index'
import routes from './router' 
// import Element from 'element-ui';
import { List } from 'vant';

import '@/assets/css/index.less'
 
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(Element)  
 

Vue.use(List);
const router = new VueRouter({
  routes,
  mode:'history' 
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store 
})
