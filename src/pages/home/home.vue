<template>
    <div> 
       <head-top signin-up='home'></head-top> 
        <nav-tem :classify="classify"></nav-tem>  
        <div class="article-container"> 
        <div class="article-main">   
          <a href="">
            <div class="article-main-item">
              <div class="item-info">
                <div class="item-remark">
                  <span class="time">10小时前</span>
                  <a href="javascript:;" class="tag">javascript</a>
                </div>
                <div > 
                  <a href="" class="item-title">详解JavaScript中的Event Loop（事件循环）机制</a>
                  </div>  
                <div class="item-handle">
                  <a href="" class="handle-box">
                    <i class="icon icon-collect-v1"></i> 
                    1
                  </a> 
                  <a href="" class="handle-box">
                    <i class="icon icon-browse-v1"></i>
                    2 
                  </a> 
                </div>
              </div>
              <div class="item-thumb">
                <img src="http://img.shiche.com.cn/doc/t196957099601982.jpg@!240x160" alt="">
              </div>        
            </div>
          </a> 
          <a href="">
            <div class="article-main-item">
              <div class="item-info">
                <div class="item-remark">
                  <span class="time">10小时前</span>
                  <a href="javascript:;" class="tag">javascript</a>
                </div>
                <div >
                  <a href="" class="item-title">详解JavaScript中的Event Loop（事件循环）机制</a>
                  </div>  
                <div class="item-handle">
                  <a href="" class="handle-box">
                    <i class="icon icon-collect-v1"></i> 
                    1
                  </a> 
                  <a href="" class="handle-box">
                    <i class="icon icon-browse-v1"></i>
                    2 
                  </a> 
                </div>
              </div>
              <div class="item-thumb">
                <img src="http://img.shiche.com.cn/doc/t196957099601982.jpg@!240x160" alt="">
              </div>        
            </div>
          </a> 
         
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
import navTem from "@/components/nav.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    headTop,
    navTem
  },
  computed: {
    ...mapState(["classify"])
  },
  created() {
    //  this.getArticleClassify()
  },
  methods: {
    // ...mapMutations(["get_article_classify"]),
    ...mapActions(["getClassify"])
  },
  mounted() {
    if (!this.classify.length) {
      this.getClassify(); 
      console.log(this.$store)
    } 
    // if (!this.classify) {
    //   this.getClassify();
    // }
  }
};
</script>
 
<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/common";
.head_logo {
  left: 0.4rem;
  font-weight: 400;
}
.article-main-item {
  .flex;
  padding: 1rem;
  justify-content: space-between;
  .item-title {
    line-height: 1.2;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: #2e3135;
    .flex;
    &:hover {
      text-decoration: underline;
    }
  }
  .item-thumb {
    width: 5rem;
    .flex;
    align-content: center;
    align-items: center;
    img {
    }
  }
  .item-remark {
    font-size: 12px;
    .font-color-little;
    .tag {
      .font-color-little;
      margin-left: 0.5rem;
      &:hover {
        color: #007fff;
      }
    }
  }
  .item-handle {
    .flex-inline;
    .handle-box {
      padding: 0.2rem 0.5rem;
      margin-left: -1px;
      font-size: 0.6rem;
      border-radius: 2px;
      font-weight: bold;
      color: #ccc;
      border: 1px solid #eee;
      .flex;
      .flex-center;
      .icon {
        margin-right: 0.2rem;
      }
      &:hover {
        color: #007fff;
      }
    }
  }
}
</style>
                           