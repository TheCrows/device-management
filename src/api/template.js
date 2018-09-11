import HttpAgent from '@/api/index.js'

let id = 123

/**
 * @param {String} url
 * @param {Object} params
 * @param {Object} config
 * @return {Promise}
 */
// url: String params: Null/Object config: Null/Object
// HttpAgent.get(url, params, config)
// HttpAgent.post(url, params, config)...

// 默认方式
HttpAgent.get('user/' + id).then((res) => { // 请求成功的回调
  console.log(res)
  if (res.status === 0) {
  }
}).catch((err) => { // 请求失败的回调
  console.log(err)
})

HttpAgent.delete('user/' + id, null, { // 配置
  withCredentials: false
}).then((res) => { // 请求成功的回调
  console.log(res)
}).catch((err) => { // 请求失败的回调
  console.log(err)
})

HttpAgent.get('user', {name: '张三'}).then((res) => { // 请求成功的回调
  console.log(res)
}).catch((err) => { // 请求失败的回调
  console.log(err)
})

// 改变配置，以及空值过滤
HttpAgent.post('/user', { // 参数
  name: '张三', age: 23, both_time: null
}, { // 配置
  baseURL: '/api/v1'
}).then((res) => { // 请求成功的回调
  console.log(res)
}).catch((err) => { // 请求失败的回调
  console.log(err)
})

// 特殊情况
this.$HttpAgent.put('/book?id=1', { // 参数
  name: '张三', age: 23, both_time: null
}, { // 配置
  baseURL: '/api/v1'
}).then((res) => { // 请求成功的回调
  console.log(res)
}).catch((err) => { // 请求失败的回调
  console.log(err)
})
