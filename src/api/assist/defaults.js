// import utils from './utils.js' // 引用工具函数

var baseURL = '/' // 配置默认请求前缀

export default { // 设置axios的参数
  baseURL: baseURL, // 配置默认请求前缀
  // transformRequest: [utils.filterNull], // `transformRequest` 允许在向服务器发送前，修改请求数据，只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法，函数必须返回一个字符串，或 ArrayBuffer，或 Stream function (data) { return data }
  transformResponse: [function (data) {
    return data
  }], // `transformResponse` 在请求完成后响应传递给 then/catch 前，允许修改响应数据，函数必须return，function (data) { return data }
  // headers: {}, // `headers` 是即将被发送的自定义请求头
  // adapter: function (config) { console.log('adapter:', config) }, // `adapter` 允许自定义处理请求，以使测试更轻松，返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  // xsrfCookieName: 'XSRF-TOKEN', // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称，默认：XSRF-TOKEN
  // xsrfHeaderName: 'X-XSRF-TOKEN', // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称，默认：X-XSRF-TOKEN
  // `onUploadProgress` 允许为上传处理进度事件
  // onUploadProgress: function (progressEvent) {
  //   // 对原生进度事件的处理
  // },
  // // `onDownloadProgress` 允许为下载处理进度事件
  // onDownloadProgress: function (progressEvent) {
  //   // 对原生进度事件的处理
  // },
  // maxContentLength: 2000, // `maxContentLength` 定义允许的响应内容的最大尺寸
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  // validateStatus: function (status) {
  //   return status >= 200 && status < 300; // 默认的
  // },
  // maxRedirects: 5, // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目，如果设置为0，将不会 follow 任何重定向，默认：5
  withCredentials: true, // `withCredentials` 表示跨域请求时是否需要使用凭证，默认的：false
  responseType: 'json' // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'，默认的json
  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：`keepAlive` 默认没有启用
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口；`auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据；这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 9000,
  //   auth: {
  //     username: 'mikeymike',
  //     password: 'rapunz3l'
  //   }
  // },
  // cancelToken: new CancelToken(function (cancel) {}) // `cancelToken` 指定用于取消请求的 cancel token（查看后面的 Cancellation 这节了解更多）
}
