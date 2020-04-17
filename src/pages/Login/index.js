import { mapActions } from 'vuex'

export default {
  name: 'Logup',
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
        this.$router.push({ path: '/' })
      })
    }
  }
}
