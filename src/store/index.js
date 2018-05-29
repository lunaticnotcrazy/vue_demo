import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../api/'

import Axios from "../api/http";


Vue.use(Vuex)

const state = {
  classify: [],
  articleList: [],
  articleDetail: [],
  recommendList: [],
  labelList: []
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
  },
  getRecommendList(state, recommendList) {
    state.recommendList = recommendList
  },
  getLabelList(state, labelList) {
    state.labelList = labelList
  },
  setArticleList(state, articleMore) {
    state.articleList = articleMore
  },
  pushArticleList(state, articleMore) {
    state.articleList.push(...articleMore)
  }
}

const getClassifyRequest = () => { 
  return Axios
    .get("classify")
}

const getArticleListRequest = (data) => {
  return Axios
    .get("articleList", data)
}

const getArticleDetailRequest = (data) => {
  return Axios
    .get("article/", data)
} 
const getRecommendListRequest = (data) => {
  return Axios
    .get("recommend/", data)
}
const getLabelLisRequest = (data) => {
  return Axios
    .get("label/", data)
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
        throw new Error('获取分类类目失败')
      }
    } catch (err) {
      console.log(err)
      console.log('您尚未登陆或者session失效')
    }
  },
  async getArticleList({
    commit
  }, data) {
    try {
      const res = await getArticleListRequest(data)
      if (res.status == 200) {
        res.data.map((el) => {
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
  }, data) {
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
  },
  async getRecommendList({
    commit
  }, data) {
    try {
      const res = await getRecommendListRequest(data)
      if (res.status == 200) {
        console.log(res.data);
        commit('getRecommendList', res.data);
      } else {
        throw new Error('获取文章失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async getLabelList({
    commit
  }, data) {
    try {
      const res = await getLabelLisRequest(data)
      if (res.status == 200) {
        console.log(res.data);
        commit('getLabelList', res.data);
      } else {
        throw new Error('获取文章失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async getArticleListMore({
    commit
  }, data) {
    try {
      const res = await getArticleListRequest(data)
      if (res.status == 200) {
        commit('setArticleList', res.data);
        return new Promise((resolve) => { 
          resolve(res.data)
        })
      } else {
        throw new Error('获取文章失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  },
  async pushArticleListMore({
    commit
  }, data) {
    try {
      const res = await getArticleListRequest(data)
      if (res.status == 200) {
        commit('pushArticleList', res.data);
        return new Promise((resolve) => {
          resolve(res.data)
        })
      } else {
        throw new Error('获取文章失败')
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  }
}
const getters = {
  setArticleList: function (data) {
    state.articleList = data
  },
  pushArticleList: function () {
    state.articleList.push(...data)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
