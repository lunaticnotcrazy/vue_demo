import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger' 
// import articleList from './module/articleList'
// import classify from './module/classify'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
  
Vue.use(Vuex)  

const state = {
    classify:[],
    articleList:[] 
}
 
export default new Vuex.Store({
   state,
   mutations,  
   actions,
   getters
})   
  