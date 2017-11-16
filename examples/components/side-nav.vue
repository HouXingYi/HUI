<template>
  <div class="side-nav">
    <div class="nav-group nav1">
      <div class="side-nav-title">指南</div>
      <div class="side-nav-list">
        <router-link to="/intro">介绍</router-link>
      </div>
    </div>
    <div class="nav-group nav2">
      <div class="side-nav-title">基础</div>
      <div class="side-nav-list">
        <router-link to="/icon">图标</router-link>
        <router-link to="/color">色彩</router-link>
        <router-link to="/button">按钮</router-link>
      </div>
    </div>
    <div class="nav-group nav3">
      <div class="side-nav-title">表单</div>
      <div class="side-nav-list">
        <router-link to="/input">输入框</router-link>
        <router-link to="/radio">单选框</router-link>
        <router-link to="/checkbox">多选框</router-link>
      </div>
    </div>
    <div class="nav-group nav4">
      <div class="side-nav-title">数据</div>
      <div class="side-nav-list">
        <router-link to="/dataGird">表格</router-link>
      </div>
    </div>
    <div class="nav-group nav5">
      <div class="side-nav-title">导航</div>
      <div class="side-nav-list">
        <router-link to="/menu">导航菜单</router-link>
      </div>
    </div>
    <div class="nav-group nav6">
      <div class="side-nav-title">反馈</div>
      <div class="side-nav-list">
        <router-link to="/modal">对话框</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    }
  };
</script>
<style lang="scss">
.side-nav{
  padding: 32px 0;
  color: #3f536e;
  .nav-group{
    margin-bottom: 30px;
    .side-nav-title{
      padding: 0 24px 8px;
      color: #999;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    a{
      display: block;
      position: relative;
      padding: 6px 24px 6px 32px;
      color: #616367;
      font-size: 14px;
    }
    a.router-link-active{
      color: #2d8cf0;
      border-right: 2px solid #2d8cf0;
    }
  }
}
</style>

