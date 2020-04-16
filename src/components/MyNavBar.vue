<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="/">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/my">
        <i class="el-icon-menu"></i>
        <span slot="title">我的</span>
      </el-menu-item>
      <el-menu-item index="/create">
        <i class="el-icon-setting"></i>
        <span slot="title">新增</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth
      // isCollapse: false
    };
  },
  computed: {
    isCollapse() {
      if (this.screenWidth <= "550px") {
        return true;
      } else {
        return false;
      }
    }
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
  width: 200px;
  height: 100%;
}
</style>
