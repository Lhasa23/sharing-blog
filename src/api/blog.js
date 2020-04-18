import request from '@/helper/request'

const URL = {
  DEL_BLOG: '/blog/:blogId',
  UPDATE_BLOG: '/blog/:blogId',
  CREATE_BLOG: '/blog',
  GET_BLOG: '/blog',
  GET_DETAIL: '/blog/:blogId'
}

export default {
  getBlogs({ page = 1, userId, atIndex } = { page: 1 }) {
    return request(URL.GET_BLOG, 'GET', { page, userId, atIndex })
  },
  getBlogsByUserId(userId, { page = 1, atIndex } = { page: 1 }) {
    return this.getBlogs({ page, userId, atIndex })
  },
  getIndexBlogs({ page = 1 } = { page: 1 }) {
    return this.getBlogs({ page, atIndex: true })
  },
  getDetail({ blogId }) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId))
  },
  updataBlog({ blogId }, { title, content, description, atIndex }) {
    return request(URL.UPDATE_BLOG.replace(':blogId', blogId), 'PATCH', {
      title,
      content,
      description,
      atIndex
    })
  },
  deleteBlog({ blogId }) {
    return request(URL.DEL_BLOG.replace(':blogId', blogId), 'DELETE')
  },
  createBlog(
    { title = '', content = '', description = '', atIndex = false } = {
      title: '',
      content: '',
      description: ''
    }
  ) {
    return request(URL.CREATE_BLOG, 'POST', {
      title,
      content,
      description,
      atIndex
    })
  }
}
