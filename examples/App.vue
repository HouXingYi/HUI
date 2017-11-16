<template>
  <div id="app">
    <topHeader></topHeader>
    <div class="container">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <mainFooter></mainFooter>
  </div>
</template>
<script>
import topHeader from './components/header.vue'
import mainFooter from './components/footer.vue'
import sideNav from './components/side-nav.vue'
export default {
  name: 'app',
  data(){
    return {
    }
  },
  created(){
  },
  components : {
    topHeader,
    mainFooter,
    sideNav
  }
}
</script>
<style lang="scss">
  @import "./assets/style/index.scss";
  @import "../src/styles/index.scss"; //组件样式
  #app{
    width: 100%;
    height: 100%;
    background: #eee;
  }
  .container{
    margin: 0px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.5);
    .nav{
      float: left;
      width: 200px;
    }
    .view {
      float: left;
      width: calc(100% - 205px);
      padding: 32px 48px 48px;
      box-sizing: border-box;
      border-left: 1px solid #e5e5e5;
    }
  }
  .container:after{
    content:"";
    clear: both;
    display: block;
  }
</style>
