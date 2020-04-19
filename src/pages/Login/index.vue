<template>
  <div id="login">
    <el-form v-model="user">
      <el-form-item label="用户名">
        <el-input
          type="text"
          v-model="user.username"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="user.password"
          show-password
          placeholder="密码"
          @keypress.enter.native="onLogin"
        ></el-input>
      </el-form-item>
      <el-button size="medium" @click="onLogin">立即登录</el-button>
      <p class="notice">
        没有账号？<router-link to="/logup">注册新用户</router-link>
      </p>
    </el-form>
  </div>
</template>

<script src="./index.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./index.less"></style>
