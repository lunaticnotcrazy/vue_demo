<template>
   <div class="article-main"> 
            <div class="article-main-item"  v-for="(item,index) in articleList" :key="index">
              <div class="item-info">
                <div class="item-remark">
                  <span class="time">{{item.utime}}</span>
                  <span class="time">{{item.source}}</span>
                  <a href="javascript:;" class="tag">{{item.classify}}</a>
                </div>
                <div >  
                  <router-link :to="{name: 'article', params: {article_id: item.article_id }}" class="item-title">
                    {{item.title}}
                  </router-link> 
                  </div>  
                <div class="item-handle">
                  <!-- <a href="" class="handle-box">
                    <i class="icon icon-collect-v1"></i> 
                    1
                  </a>   --> 
                  <a href="" class="handle-box">
                    <i class="icon icon-browse-v1"></i>
                    {{item.pv}}
                  </a> 
                </div>
              </div>
              <div class="item-thumb" v-if="item.thumb">
                <img src="http://img.shiche.com.cn/doc/t196957099601982.jpg@!240x160" alt="">
              </div>   
            </div> 
        </div>
</template>
<script>
export default {
  props: ["articleList"]
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../assets/css/common";
.article-main-item {
  .flex;
  border-bottom: 1px solid rgba(178,186,194,.15);
  &:hover{
    background: rgba(0,0,0,.01)
  };
  padding: 1rem;
  justify-content: space-between;
  .item-title {
    line-height: 1.2;
    font-size: 1.2rem;
    font-weight: bold;
    margin:0 0 0.5rem; 
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
    margin-bottom: 5px;
    .font-color-little;
    .tag {
      .font-color-little;
      margin-left: 0.5rem;
      &:hover {
        color: #007fff;
      }
    }
    .time{
      margin-right: 5px;
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