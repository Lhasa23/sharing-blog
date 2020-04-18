import blogapi from '@/api/blog'

export default {
  name: 'User',
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    }
  },
  created() {
    this.userId = this.$route.params.userId
    this.page = Number(this.$route.query.page) || 1
    blogapi.getBlogsByUserId(this.userId, { page: this.page }).then(res => {
      this.page = res.page
      this.blogs = res.data
      this.total = res.total
      res.data.length > 0 ? (this.user = res.data[0].user) : this.user
    })
  },
  methods: {
    onPageChange(val) {
      blogapi.getBlogsByUserId(this.userId, { page: val }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({
          path: `/user/${this.userId}`,
          query: { page: val }
        })
      })
    }
  }
}
