import api from '../api/'
import {
  get_article_classify
} from './type'


// const classifyActions = {  
//   getArticleClassify({
//     commit
//   }){ 
//     api.get_article_classify().then(res => {
//       const data = res.data 
//       commit(get_article_classify, {
//         data: data
//       })
//     })
//   }
// }

// const classifyActions = ({
//   commit 
// }) => {
//   api.get_article_classify().then(res => {
//     const data = res.data
//     commit(get_article_classify, {
//       data: data
//     })
//   })
// }

 

export const classifyActions = ({
  commit
}) => {
  api.get_article_classify().then(res => {
    const data = res.data
    commit(get_article_classify, {
      data: data
    })
  })
}
