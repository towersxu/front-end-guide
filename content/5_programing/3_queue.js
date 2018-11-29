/**
 * 背景：
 * ----------------------------------------------------------------------*
 * 在编码中，我们常遇到这样的情景，同时输入多个值，但是处理的时候我们确
 * 需要改成一个一个的处理，可以理解为并行转串行。
 * 例如在文件上传的时候，用户选择了很多的文件，但是我们的上传控件只支持一个一个的上传。
 * 或者
 * 用户选择的图片，我们需要把这些图片在前端进行压缩和转base64后，直接显示
 * 在界面上，但是在由于js是单线程的，如果我们同时处理所有的图片，就会出现
 * 页面卡顿，无响应。
 * ----------------------------------------------------------------------*
 * 
 * 题目：
 * 每隔1s触发一次addUpload，模拟用户批量添加3个图片，
 * 但是upload只能2s处理一个图片。
 * 需要编写addUpload函数，实现在upload执行完成后才能重新
 * 调用upload.
 */
let isFrozon = false
function upload (e) {
  if (isFrozon) {
    throw new Error('我还在执行呢')
  }
  isFrozon = true
  return new Promise((resolve) => {
    setTimeout(() => {
      isFrozon = false
      console.log('-------->')
      console.log(Date.now())
      console.log(e)
      console.log('<--------')
      resolve()
    }, 2000)
  })
}

function addUpload() {
  // todo:
}

let i = 0
var t = setInterval(() => {
  i++
  addUpload(i, i * i,  i * i * i)
  if (i === 3) {
    clearInterval(t)
  }
}, 1000)

