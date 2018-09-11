/* eslint-disable no-new */
import utils from './assist/utils.js' // 引用工具函数

import defaults from './assist/defaults.js' // 引用默认配置

var axios = require('axios') // 引用axios

let request = {
  defaults: defaults,
  config: {},
  request: function (method, url, params, config) {
    let dataMethods = ['put', 'post', 'patch']
    let paramsMethods = ['get', 'delete', 'head', 'options']
    params = utils.filterNull(params) // 过滤处理
    this.config = utils.extend(defaults, config)
    // console.log('request.config:', this.config)

    let apiBase = {
      /***************************************************************************************************************************************************** */
      // url: `/wocoupon${url}`, // `url` 是用于请求的服务器 URL
      url: url, // `url` 是用于请求的服务器 URL
      method: method.toLowerCase(), // `method` 是创建请求时使用的方法，默认是 get
      params: paramsMethods.indexOf(method.toLowerCase()) !== -1 ? params : null, // `params` 是即将与请求一起发送的 URL 参数，必须是一个无格式对象(plain object)或 URLSearchParams 对象
      data: dataMethods.indexOf(method.toLowerCase()) !== -1 ? params : null // `data` 是作为请求主体被发送的数据，只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'，在没有设置 `transformRequest` 时，必须是以下类型之一： string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams；浏览器专属：FormData, File, Blob；Node 专属： Stream
    }
    let req = Object.assign({}, this.config, apiBase)
    // console.log('request:', req)
    return axios(req)
  }
}


function isIE(data) { //ie?
  if (!!window.ActiveXObject || "ActiveXObject" in window)
   return JSON.parse(data);
   else
   return data;
  }

// 添加响应拦截器
axios.interceptors.response.use(function (response) { // 请求成功的回调
  if(isIE(response.data).code==-1){
    window.location.href = '#/login'
    // history.go(0)
  }
  // return Promise.resolve(JSON.parse(response.data))
  return Promise.resolve(isIE(response.data))
}, function (error) { // 请求失败的回调
  console.log(error);
  
  if (error.response) { // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    console.error(error)
    var response = error.response
    if (response.status === 401) {
      // window.location.href = '#/login'
    } else {
      window.alert('api error, HTTP CODE: ' + response.status)
    }
  } else { // 在提出请求设置时发生的错误: Something happened in setting up the request that triggered an Error
    console.error('Error', error.message)
  }
  return Promise.reject(error)
})

/**
 * @param {String} url
 * @param {Object} params
 * @param {Object} config
 * @return {Promise}
 */
// 添加请求方式
utils.forEach(['put', 'post', 'patch', 'get', 'delete', 'head', 'options'], function (method) {
  request[method] = function (url, params, config) {
    // console.log('请求方式:', method, url, params, config)
    return request.request(method, url, params, config)
  }
})

export default request
