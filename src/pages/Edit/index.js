import blogapi from '@/api/blog'

export default {
  name: 'Edit',
  data() {
    return {
      blogId: null,
      editBlog: {
        title: '',
        description: '',
        content: '',
        atIndex: false
      }
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blogapi.getDetail({ blogId: this.blogId }).then(res => {
      Object.assign(this.editBlog, res.data)
    })
  },
  methods: {
    onEdit() {
      blogapi.updataBlog({ blogId: this.blogId }, this.editBlog).then(res => {
        this.$message.success(res.msg)
        this.$router.push({ path: `/detail/${res.data.id}` })
      })
    }
  }
}
