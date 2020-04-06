import request from '@/helper/request'

const URL = {
  LOGUP: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  logup({username, password}) {
    return request(URL.LOGUP, 'POST', { username, password })
  },
  login({username, password}) {
    return request(URL.LOGIN, 'POST', { username, password })
  },
  logout() {
    return request(URL.LOGOUT)
  },
  getInfo() {
    return request(URL.GET_INFO)
  }
}