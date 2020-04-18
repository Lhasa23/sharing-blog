import blogapi from '@/api/blog'

export default {
  name: 'Home',
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created() {
    this.page = Number(this.$route.query.page) || 1
    blogapi.getIndexBlogs({ page: this.page }).then(res => {
      this.total = res.total
      this.blogs = res.data
      this.page = res.page
    })
  },
  methods: {
    clickAvatar(id) {
      if (this.$store.getters.isLogin && this.$store.getters.user.id === id) {
        this.$router.push({ path: '/my' })
      } else {
        this.$router.push({ path: `/user/${id}` })
      }
    },
    onPageChange(val) {
      blogapi.getIndexBlogs({ page: val }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: '/', query: { page: val } })
      })
    }
  }
}
