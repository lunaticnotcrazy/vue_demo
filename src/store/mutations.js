import {
  get_article_classify
} from './type'
const mutations = {
  [get_article_classify](state, actions) {
    state.classify = actions.data
  }
} 

export default mutations
 