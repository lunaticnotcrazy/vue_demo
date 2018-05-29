<template>
  <div>
    <head-top signin-up='home'></head-top>
    <nav-tem :classify="classify"></nav-tem>
    <div class="article-container">
      <van-list v-model="loading" :finished="finished" :offset="offset" @load="onLoad">
        <article-list :articleList="articleList"></article-list>
      </van-list>
      <div class="article-side">
        <new-side :recommendList="recommendList"></new-side>
        <label-side></label-side>
      </div>
    </div>
  </div>
</template>    
<script>
import headTop from '@/components/header/header.vue'
import navTem from '@/components/nav.vue'
import articleList from '@/components/articleList.vue'
import newSide from '@/components/newSide.vue'
import labelSide from '@/components/label.vue'
import Axios from '@/api/http'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      finished: false,
      offset: 100,
      filter: {
        page: 0
      },
      articleNewList: []
    }
  },
  components: {
    headTop,
    navTem,
    articleList,
    labelSide,
    newSide
  },
  computed: {
    ...mapState(['classify', 'articleList', 'recommendList'])
  },
  created() {
    //  this.getArticleClassify()
  },
  methods: {
    // ...mapMutations(["get_article_classify"]),
    ...mapActions([
      'getClassify',
      'getArticleList',
      'getRecommendList',
      'getArticleListMore',
      'pushArticleListMore'
    ]),
    onLoad() {
      this.getNewArtcile()
    },
    getNewArtcile() {
      let _this = this
      async function getNewArtcileQuest(params) {
        _this.filter.page++
        let articleData =
          _this.articleList.length == 0
            ? await _this.getArticleListMore(_this.filter)
            : await _this.pushArticleListMore(_this.filter)
        if (articleData.length < 10) {
          _this.finished = true
          _this.loading = false
        } else if (articleData.length == 10) {
          _this.loading = false
          _this.finished = false
        }
      }
      getNewArtcileQuest()
    }
  },
  mounted() {
    this.getClassify()
    this.getRecommendList()
  } 
  
}
</script>
 
<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/css/common';
.head_logo {
  left: 0.4rem;
  font-weight: 400;
}
</style>
                           