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
    },
    async onDeleteBlog(id) {
      await this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blogapi.deleteBlog({ blogId: id })
      await this.$message({
        type: 'success',
        message: '删除成功'
      })
      // this.blogs = this.blogs.filter(blog => blog.id !== id)
      this.onPageChange(this.page)
    }
  }
}
