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
import headTop from "@/components/header/header.vue";
import navTem from "@/components/nav.vue";
import articleList from "@/components/articleList.vue";
import newSide from "@/components/newSide.vue";
import labelSide from "@/components/label.vue";

import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            loading: false,
            finished: false,
            offset: 10
        };
    },
    components: {
        headTop,
        navTem,
        articleList,
        labelSide,
        newSide
    },
    computed: {
        ...mapState(["classify", "articleList", "recommendList"]),
        filter: {
            set: function() {
                this.getArticleList(this.filter);
            } 
        }
    },
    created() {
        //  this.getArticleClassify()
        this.getClassify();
        this.getRecommendList();
        this.getArticleList();
    },
    methods: {
        // ...mapMutations(["get_article_classify"]),
        ...mapActions(["getClassify", "getArticleList", "getRecommendList"]),
        onLoad() {
            console.log(3);
        }
    },
    mounted() {}
};
</script>
 
<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/common";
.head_logo {
    left: 0.4rem;
    font-weight: 400;
}
</style>
                           