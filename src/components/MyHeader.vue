<template>
  <header
    :class="{ login: isLogin, 'no-login': !isLogin, invisible: invisible }"
  >
    <template v-if="!isLogin">
      <h1>Let's Share</h1>
      <div id="btns">
        <router-link to="/login">
          <el-button>登陆</el-button>
        </router-link>
        <router-link to="/logup">
          <el-button>注册</el-button>
        </router-link>
      </div>
    </template>
    <template v-else>
      <h1>Advance From Log</h1>
      <router-link to="/edit"><i class="edit el-icon-edit"></i></router-link>
      <div class="user">
        <img
          class="avatar"
          :src="user.avatar"
          :alt="user.username"
          :title="user.username"
        />
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import auth from '@/api/auth'
window.auth = auth
export default {
  name: 'MyHeader',
  data() {
    return {
      invisible: true
      // isLogin: false
    }
  },
  computed: {
    ...mapGetters(['isLogin', 'user'])
  },
  created() {
    this.checkLogin().then(login => {
      if (login || !login) {
        this.invisible = false
      }
    })
  },
  methods: {
    ...mapActions(['checkLogin', 'logout']),
    onLogout() {
      this.logout().then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

<style lang="less">
@import '../assets/base.less';

header.invisible {
  visibility: hidden;
}

header.no-login {
  padding: 0 12% 30px 12%;
  background-color: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #000000;
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

  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }
    }

    &:hover ul {
      display: block;
    }
  }
}
</style>
