<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="false"
    >
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <router-link to="/">
          <span>首页</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <router-link to="/my">
          <span>我的</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <router-link to="/create">
          <span>新增</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 140px;
  height: 100%;
}
</style>
