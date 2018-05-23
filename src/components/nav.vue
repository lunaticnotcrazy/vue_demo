<template>
    <div class="nav-mode-wrap ">
        <div class="nav-mode container">
            <div class="nav-item">
                <a href="javascript:;" @click.prevent="changeTag()">最新</a>
            </div>
            <div class="nav-item" v-for="(item,index) in classify" :key="index">
                <a href="javascript:;" @click.prevent="changeTag(item.name)">{{item.name}}</a>
            </div>
        </div>
    </div>
</template>  
<script>
export default {
    props: ["classify"],
    data() {
        return {
            navData: []
        };
    }, 
    methods: {
        changeTag(type) {
            let param = type
                ? {
                      source: type,
                      page: 1
                  }
                : {
                      page: 1
                  };
            this.$parent.filter = param;
            this.$parent.finished = false;
            // this.$parent.getNewArtcile();
            this.$parent.getArticleList(param);
        }
    },
    mounted() {
        // this.getData();
    }
};
</script>
<style rel="stylesheet/less" lang="less" scoped>
@import "../assets/css/common";
.nav-mode-wrap {
    background: #fff;
    .shadow-primary;
}
.nav-mode {
    padding: 1rem;
    .flex;
}
.nav-item {
    margin-right: 1rem;
}
</style>