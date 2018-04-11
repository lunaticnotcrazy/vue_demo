import api from '../../api/'
import {
  get_article_classify
} from '../type'

const state = {
  items: []
}
const actions = {  
  getArticleClassify({
    commit
  }){ 
    api.get_article_classify().then(res => {
      const data = res.data 
      commit(get_article_classify, {
        data: data
      })
    })
  }
}

const mutations = {
  [get_article_classify](state, actions) {
    state.items = actions.data 
  }
}

export default {
  state,
  actions,
  mutations
}
