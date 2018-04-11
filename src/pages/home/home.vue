<template>
    <div> 
       <head-top signin-up='home'></head-top> 
        <nav-tem :classify="classify"></nav-tem>  
        <div class="article-container">  
        <article-list :articleList = "articleList"></article-list>
        <div class="article-side">
         <new-side></new-side> 
         <hot-side></hot-side>
        </div> 
        </div> 
    </div> 
</template>    
 
<script>
import headTop from "@/components/header/header.vue";
import navTem from "@/components/nav.vue";
import articleList from "@/components/articleList.vue";
import newSide from "@/components/newSide.vue";
import hotSide from "@/components/newSide.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    headTop,
    navTem,
    articleList,
    newSide,
    hotSide
  },
  computed: {
    ...mapState(["classify", "articleList"])
  },
  created() {
    //  this.getArticleClassify()
    this.getClassify();
    this.getArticleList();
  },
  methods: {
    // ...mapMutations(["get_article_classify"]),
    ...mapActions(["getClassify", "getArticleList"]),
    handleChange(options) {
      this.getArticleList(options);
    }
  },
  mounted() {
    // if (!this.classify.length) {
    //   this.getClassify();
    // }
    // this.getArticleList();
    // console.log(this.$store);
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
</style>
                           