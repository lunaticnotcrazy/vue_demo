<template>
  <div class="article-side-block article-table ">
    <div class="article-side-block-title">
      推荐标签
    </div>
    <a href="javascript:;" class="article-recommend-item" v-for="(item,index) in labelList" :key="index" @click="handleChange(item.label)">
      {{item.label}}
    </a>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["labelList", "articleList"])
    },
    methods: {
        // ...mapMutations(["get_article_classify"]),
        ...mapActions(["getLabelList", "getArticleList"]),
        handleChange(label) {
            this.$parent.filter = {
                label: label,
                page: 1
            };
            this.$parent.getArticleList({
                label: label,
                page: 1
            });
            this.$parent.finished = false;
        }
    }, 
    created() {},
    mounted() {
        this.getLabelList();
    }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../assets/css/common";
</style>   