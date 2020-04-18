function friendlyDate(dateStr) {
  let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
  let time = dateObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''

  switch (true) {
    case space < 60000:
      str = '刚刚'
      break
    case space < 1000 * 3600:
      str = Math.floor(space / 60000) + '分钟前'
      break
    case space < 1000 * 3600 * 24:
      str = Math.floor(space / (1000 * 3600)) + '小时前'
      break
    default:
      let hour =
        dateObj.getHours() < 10 ? `0${dateObj.getHours()}` : dateObj.getHours()
      let minute =
        dateObj.getMinutes() < 10
          ? `0${dateObj.getMinutes()}`
          : dateObj.getMinutes()
      let second =
        dateObj.getSeconds() < 10
          ? `0${dateObj.getSeconds()}`
          : dateObj.getSeconds()
      str = `${dateObj.getFullYear()}-${dateObj.getMonth() +
        1}-${dateObj.getDate()} `
      str += `${hour}:${minute}:${second}`
  }
  return str
}

function splitDate(dateStr) {
  let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)

  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    date: dateObj.getDate()
  }
}

export default {
  install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
    Vue.prototype.splitDate = splitDate
  }
}
