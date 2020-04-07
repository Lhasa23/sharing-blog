<template>
  <header :class="{'login': isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>Let's Share</h1>
      <div id="btns">
        <el-button>登陆</el-button>
        <el-button>注册</el-button>
      </div>
    </template>
    <template v-else>
      <h1>Let's Share</h1>
      <i class="edit el-icon-edit"></i>
      <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" />
    </template>

  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style lang="less">
@import "../assets/bace.less";

header.no-login {
  padding: 0 12% 30px 12%;
  background-color: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #000;
    font-size: 40px;
    margin: 60px 0 0 0;
  }

  p {
    margin: 15px 0 0 0;
    color: #000;
  }

  button {
    margin: 20px 5px 0 5px;
  }
}

header.login {
  background-color: @bgColor;
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 40px;
    flex: 1;
  }

  .edit {
    color: #000;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
}

</style>