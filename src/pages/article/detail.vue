<template>
    <div>
        <head-top signin-up='home'></head-top>
        <div class="article-container">
            <div class="article-main article-content">
                <div class="article-author">
                    <div class="info">
                        <!-- <div class="name">{{articleDetail[0].source}}</div> -->
                        <div class="time">{{articleDetail.utime}}</div>
                    </div>
                </div>
                <h4 class="heading" data-id="heading-7">{{articleDetail.title}}</h4>
                <div v-if="!isNoData" v-html="articleDetail.content">
                    <!-- {{articleDetail[0].content}}   -->
                </div>
            </div>
            <div class="article-side">
                <new-side :recommendList="recommendList"></new-side>
                <label-side></label-side>
            </div>
        </div>
    </div>
</template>
<script>
import headTop from '@/components/header/header.vue'
import newSide from '@/components/newSide.vue'
import labelSide from '@/components/label.vue'

import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      isNoData: false,
      articleData: []
    }
  },
  computed: {
    ...mapState(['articleDetail', 'recommendList'])
  },
  components: {
    headTop,
    newSide,
    labelSide
  },
  methods: {
    // ...mapMutations(["get_article_classify"]),
    ...mapActions(['getArticleDetail', 'getRecommendList'])
  },
  created() {},
  watch: {
    changeId(val) {
      console.log('11111')
    }
  },
  activated() {
    this.changeId = this.$route.params.article_id
    this.getArticleDetail({ article_id: this.changeId, requestSource: true })
    // this.changeId = this.$route.params.article_id 
  },
  mounted() {
    const aid = this.$route.params.article_id
    this.getArticleDetail({ article_id: aid, requestSource: true })
    this.getRecommendList()
  }
} 
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import '../../assets/css/common';
.article-content {
  padding: 1rem;
  font-size: 0.9rem;
}
.article-content blockquote {
  color: #666;
  padding: 1px 23px;
  margin: 22px 0;
  border-left: 4px solid #cbcbcb;
  background-color: #f8f8f8;
  line-height: 1.5;
  font-size: 0.9rem;
}
.article-author {
  .author-thumb {
    float: left;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.5rem;
  }
  .info {
    display: inline-block;
  }
  .name {
    color: #333;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .time {
    font-size: 0.7rem;
    .font-color-little;
  }
}
.article-title {
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>