<template> 
    <div class="nav-mode-wrap ">
        <div class="nav-mode container" >
            <div class="nav-item">最新</div>
            <div class="nav-item" v-for="(item,index) in classify" :key="index">{{item.name}}</div> 
        </div>       
    </div>   
</template>  
<script>
export default {  
  props:['classify'],
  data() {
    return {
      navData: [],
    };
  },
  methods: {
    // getData: function() {
    //   const that = this;
    //   axios
    //     .get("http://localhost:3010/classify")
    //     .then(function(res) {
    //       console.log(res);
    //       that.navData = res.data;
    //     }) 
    //     .catch(function(res) { 
    //       console.log(res);
    //     });
    // }
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
.nav-item{
    margin-right:1rem 
}
</style>