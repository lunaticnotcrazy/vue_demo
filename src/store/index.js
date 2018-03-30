import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../api/'

import axios from "axios";

Vue.use(Vuex)

const state = {
  classify: []
}

const mutations = {
  getClassify(state, classify) {
    state.classify = classify;
  }
}


const getClassifyRequest = () => {
  return axios
    .get("http://47.52.106.96/classify")
    // .then(res => { 
    //   const data = res.data
    //   return data
    // })
}
const actions = {
    async getClassify({
      commit
    }) { 
      try {
        const res = await getClassifyRequest()
        if (res.status == 200) { 
          console.log(res.data);
          commit('getClassify', res.data);
        } else {
          throw new Error('2')
        }
      } catch (err) {
        console.log('您尚未登陆或者session失效')
      }
    } 
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
