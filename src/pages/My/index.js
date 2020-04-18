import blogapi from '@/api/blog'
import { mapGetters } from 'vuex'

export default {
  name: 'My',
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.page = Number(this.$route.query.page) || 1
    blogapi.getBlogsByUserId(this.user.id, { page: this.page }).then(res => {
      this.page = res.page
      this.blogs = res.data
      this.total = res.total
    })
  },
  methods: {
    onPageChange(val) {
      blogapi.getBlogsByUserId(this.user.id, { page: val }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({
          path: `/my`,
          query: { page: val }
        })
      })
    }
  }
}
