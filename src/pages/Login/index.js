import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onLogin() {
      this.login(this.user).then(() => {
        this.$router.push({ path: this.$route.query.redirect || '/' })
      })
    }
  }
}
