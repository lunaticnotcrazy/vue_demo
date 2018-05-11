<template>
    <div class="article-side-block article-recommend ">
            <div class="article-side-block-title">
               推荐文章  
            </div>
            <div >
            <router-link  v-for="(item,index) in recommendList" :key="index" :to="{name: 'article', params: {article_id: item.article_id }}" class="article-recommend-item">
                    {{item.title}}
            </router-link> 
            </div>
          </div>
</template>
<script>
export default { 
    props:['recommendList'],
}; 
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../assets/css/common";
</style>  