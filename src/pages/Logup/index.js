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
    ...mapActions(['logup']),
    onLogup() {
      this.logup(this.user).then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}
