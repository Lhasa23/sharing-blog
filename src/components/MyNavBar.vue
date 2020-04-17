<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :router="true"
      :collapse="isCollapse"
    >
      <el-menu-item index="/">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/create">
        <i class="el-icon-setting"></i>
        <span slot="title">新增</span>
      </el-menu-item>
      <!-- <el-menu-item index="/my">
        <i class="el-icon-menu"></i>
        <span slot="title">我的</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth
      // timer: false
    }
  },
  computed: {
    isCollapse: {
      get() {
        return this.screenWidth < 1250
      },
      set() {}
    }
  },
  watch: {
    /* screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val
        if (this.screenWidth < 1250) {
          this.isCollapse = true
        }
        this.timer = true
        let that = this
        setTimeout(function() {
          that.timer = false
        }, 400)
      }
    } */
  },
  mounted() {
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  methods: {
    /* changeMenu() {
      this.isCollapse = !this.isCollapse
    } */
  }
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  height: 100%;
}
.el-menu--collapse {
  margin-left: -15px;
  width: 50px;
  height: 100%;
}
</style>
