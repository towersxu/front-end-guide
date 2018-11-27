/**
 * 已知，在nodejs中使用request可以发起ajax请求
 * 请封装一个ajax函数，实现在nodejs中发起ajax请求
 * 获取http://ux.lezhixing.com.cn/mock/8/fe/who
 * 这个接口返回的内容.request用法如下：
 * 
  const request = require('request');
  request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  })
  提示：可以直接在命令行里面使用 node content/5_programing/0_ajax.js 执行这个js
 */

let request = require('request')

function ajax (url) {
  // todo:
}

ajax('http://ux.lezhixing.com.cn/mock/8/fe/who')
  .then((res) => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })