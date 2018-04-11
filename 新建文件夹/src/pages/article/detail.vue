<template>
  <div>
      <head-top signin-up='home'></head-top> 
      <div class="article-container">
        <div class="article-main article-content">
          <div class="article-author"> 
              <div class="author-thumb">
              <img src="https://avatars.githubusercontent.com/u/15901239?v=3" alt="">
              </div>
              <div class="info"> 
                <div class="name">博主大人</div>
                <div class="time">2018 年 03 月 24 日</div>
              </div>
          </div>
          <div class="article-title">前端菜鸟帝都面试记 super | 掘金技术征文</div>
          <blockquote>
            <p>大家好我系渣渣辉我又回来了，为了不太监，我决定把前面两篇文章说要补上的几家公司都补齐全了。（我绝对不是说为了参加掘金的活动才强行补上的）
            </p></blockquote>
          <h4 class="heading" data-id="heading-7">公司概况和 JD</h4>
          <div v-if="!isNoData" v-html="articleData.content"> 
              {{articleData.content}}  
          </div>  
        </div>   
        <div class="article-side"> 
          <div class="article-side-block article-recommend ">
            <div class="article-side-block-title">
               推荐文章  
            </div>
            <a href="" class="article-recommend-item">
              详解JavaScript中的Event Loop（事件循环）机制
            </a> 
            <a href="" class="article-recommend-item">
              详解JavaScript中的Event Loop（事件循环）机制
            </a> 
            <a href="" class="article-recommend-item">
              详解JavaScript中的Event Loop（事件循环）机制
            </a> 
          </div>
          <div class="article-side-block article-recommend">
            <div class="article-side-block-title"> 
               热门文章  
            </div>
            <a href="" class="article-recommend-item">
              详解JavaScript中的Event Loop（事件循环）机制
            </a> 
            <a href="" class="article-recommend-item">
              详解JavaScript中的Event Loop（事件循环）机制
            </a> 
            <a href="" class="article-recommend-item">
              详解JavaScript中的Event Loop（事件循环）机制
            </a> 
          </div>
        </div> 
      </div> 
  </div>
</template>
<script>
import headTop from "@/components/header/header.vue";
import axios from "axios";

export default {
  data() {
    return {
      isNoData: false,
      articleData: []
    };
  },
  components: {
    headTop
  },
  methods: {
    getData: function() {
      this.isNoData = false;
      const that = this
      axios 
        .get("http://localhost:3010/users")
        .then(function(response) {
          console.log(response);
          that.articleData = response.data;
        })
        .catch(function(response) {
          console.log(response);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/common";
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