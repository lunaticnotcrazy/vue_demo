import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../api/'

import axios from "axios";

Vue.use(Vuex)

const state = {
  classify: [],
  articleList: [],
  articleDetail:[]
} 

const mutations = {
  getClassify(state, classify) {
    state.classify = classify;
  },
  getArticleList(state, articleList) {
    state.articleList = articleList
  },
  getArticleDetail(state, articleDetail) {
    state.articleDetail = articleDetail
  } 
}


const getClassifyRequest = () => {
  return axios
    .get("http://47.52.106.96/classify")
}

const getArticleListRequest = (data) => {
  return axios 
  .get("http://47.52.106.96/articleList",{params:data})
}

const getArticleDetailRequest = (data) => {
  return axios 
  .get("http://47.52.106.96/article/",{params:data})
}

 

// const actions = {
//   async getClassify({
//     commit
//   }) {
//     try {
//       const res = await getClassifyRequest()
//       if (res.status == 200) {
//         console.log(res.data);
//         commit('getClassify', res.data);
//       } else {
//         throw new Error('2')
//       }
//     } catch (err) {
//       console.log('您尚未登陆或者session失效')
//     }
//   }
//   // async getArticleList({commit})
// }

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
        throw new Error('获取分类类目失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async getArticleList({
    commit
  },data) { 
    try {  
      const res = await getArticleListRequest(data)
      if (res.status == 200) {
        res.data.map((el)=>{
          const date = new Date(el.utime);
          el.utime = date.toLocaleDateString()  
        })
        console.log(res.data)
        commit('getArticleList', res.data);
      } else { 
        throw new Error('获取文章列表失败')
      }
    } catch (err) {  
      console.log('您尚未登陆或者session失效')
    }
  },
  async getArticleDetail({
    commit
  },data) { 
    try { 
      console.log(data) 
      const res = await getArticleDetailRequest(data)
      if (res.status == 200) {
        console.log(res.data);
        commit('getArticleDetail', res.data);
      } else {  
        throw new Error('获取文章失败')
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
 