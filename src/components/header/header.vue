<template>
    <header id='head_top'>
        <div class="container header">
          <router-link :to="{path:'/'}" class="logo" title="首页">
            LL
          </router-link>
        <div class="menu">
            <div class="menu-items">
                首页 
            </div>
        </div>
        </div> 
    </header>
</template> 
<script>
export default {
  data() {
    return {
      msg: "123"
    };
  },
  props: ["signinUp"]
};
</script>
<style rel="stylesheet/less" lang="less" scoped>
@import "../../assets/css/common";
header {
   background: #fff;
   .shadow-primary;  
} 
.header {
  .flex;
  justify-content: space-between;
  padding: 1rem;
}
.logo {
  // float: left;
}
.menu {
  // float:right
}
</style>