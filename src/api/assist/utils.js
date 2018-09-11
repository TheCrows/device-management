/* eslint-disable no-useless-call */
export default {
  extend (to, from) { // 扩展
    if (!from) { return to }
    for (let key in from) {
      to[key] = from[key]
    }
    return to
  },
  isArray (val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  },
  forEach (obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /* eslint no-param-reassign:0 */
      obj = [obj]
    }

    if (this.isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj)
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj)
        }
      }
    }
  },
  filterNull (object) { // 对象空值过滤函数
    if (!object) { return {} }
    // console.log(object)
    for (var key in object) {
      // console.log('filterNull: ', key, object[key])
      if (object[key] === null) {
        delete object[key]
      }
      if (this.dataType(object[key]) === 'string') { // 字符串去除两边空格
        object[key] = object[key].trim()
      } else if (this.dataType(object[key]) === 'object') { // 对象-递归
        object[key] = this.filterNull(object[key])
      } else if (this.dataType(object[key]) === 'array') {
        object[key] = this.arrayFilterNull(object[key])
      }
    }
    return object
  },
  arrayFilterNull (array) { // 数组空值过滤
    if (array.length === 0) { return [] }
    for (var i = 0; i < array.length; i++) {
      if (this.dataType(array[i]) === 'string') { // 字符串去除两边空格
        array[i] = array[i].trim()
      } else if (this.dataType(array[i]) === 'array') {
        array[i] = this.arrayFilterNull(array[i])
      } else if (this.dataType(array[i]) === 'object') { // 对象-递归
        array[i] = this.filterNull(array[i])
      }
    }
    return array.filter(item => item !== null)
  },
  dataType (data) { // 获取数据类型
    return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  },
  transformDate(data,ifDay){
    if(!data){
      return ''
    }
    let date=new Date(data);
    let o = {   
      "Y+" : date.getFullYear(),                 //年  
      "M+" : date.getMonth()+1,                 //月份   
      "d+" : date.getDate(),                    //日   
      "h+" : date.getHours(),                   //小时   
      "m+" : date.getMinutes(),                 //分   
      "s+" : date.getSeconds(),                 //秒   
      "q+" : Math.floor((date.getMonth()+3)/3), //季度   
      "S"  : date.getMilliseconds()             //毫秒   
    }; 
    if(ifDay){
      return `${o['Y+']}-${o['M+']}-${o['d+']}`
    }
    return `${o['Y+']}-${o['M+']}-${o['d+']} ${o['h+']}:${o['m+']}:${o['s+']}`
  },
  transformTaotao(data){
    if(!data){
      return ''
    }
    let date=new Date(data);
    let o = {   
      "Y+" : date.getFullYear(),                 //年  
      "M+" : date.getMonth()+1,                 //月份   
      "d+" : date.getDate(),                    //日   
      "h+" : date.getHours(),                   //小时   
      "m+" : date.getMinutes(),                 //分   
      "s+" : date.getSeconds(),                 //秒   
      "q+" : Math.floor((date.getMonth()+3)/3), //季度   
      "S"  : date.getMilliseconds()             //毫秒   
    }; 
    return `${o['Y+']}-${o['M+']}-${o['d+']}`
  },
  //函数节流
  debounce(method,delay){
    var timer=null
    return function(){
      var _that=this
      var arg=arguments
      clearTimeout(timer)
      timer=setTimeout(function(){
        method.apply(_that,arg)
      },delay)
    }

  },
  
  getExplorer() {
    let explorer = window.navigator.userAgent,
    compare = function(s) { return (explorer.indexOf(s) >= 0); },
    ie11 = (function() { return ("ActiveXObject" in window) })();
    if (compare("MSIE") || ie11) { return 'ie'; }
    else if (compare("Firefox") && !ie11) { return 'Firefox'; }
    else if (compare("Chrome") && !ie11) { return 'Chrome'; }
    else if (compare("Opera") && !ie11) { return 'Opera'; }
    else if (compare("Safari") && !ie11) { return 'Safari'; }
  }

}

// let object = {
//   a: null,
//   b: '   cccc ddd  ',
//   o: {
//     a: null,
//     d: ' 123 ',
//     array: [
//       {name: 'yanmo', age: 23, dizhi: ' 西安 '},
//       {name: null, age: 23, dizhi: ' 西安 '},
//       {name: '  yanmo  ', age: 23, dizhi: ' 西安 '}
//     ]
//   },
//   array: [
//     {name: 'yanmo', age: 23, dizhi: ' 西安 '},
//     {name: null, age: 23, dizhi: ' 西安 '},
//     {name: '  yanmo  ', age: 23, dizhi: ' 西安 '}
//   ]
// }
