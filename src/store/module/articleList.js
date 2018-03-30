import api from '../../api/'
import {
  get_article_detail 
} from '../type'

const state = {
  items : []
}
  
const actions = { 
  get_article_detail({
    commit
  }, {
    options
  }) { 
    api.get_article_detail(options).then(response => {
      const data = response.data
      commit(get_article_detail, {
        detail: data
      })  
    })
  }
} 

const mutations = {
  [get_article_detail](state, actions) {
    state.items = actions.detail
  }
}

export default {
  state,
  actions,
  mutations
}
