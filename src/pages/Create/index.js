import blogapi from '@/api/blog'

export default {
  name: 'Create',
  data() {
    return {
      createBlog: {
        title: '',
        description: '',
        content: '',
        atIndex: false
      }
    }
  },
  methods: {
    onCreate() {
      blogapi.createBlog(this.createBlog).then(res => {
        this.$message.success(res.msg)
        this.$router.push({ path: `/detail/${res.data.id}` })
      })
    }
  }
}
