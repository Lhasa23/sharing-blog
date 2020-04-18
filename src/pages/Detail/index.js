import marked from 'marked'
import blogapi from '@/api/blog'

export default {
  name: 'Detail',
  data() {
    return {
      title: '',
      rowContent: '',
      user: {},
      createdAt: ''
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blogapi.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title
      this.rowContent = res.data.content
      this.user = res.data.user
      this.createdAt = res.data.updatedAt || res.data.createdAt
    })
  },
  computed: {
    markdown() {
      return marked(this.rowContent)
    }
  }
}
