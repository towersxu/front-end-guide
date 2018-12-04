# 网络

`content-Dispostion: inline` 与`content-Dispostion:attchment`， 在接口返回视频资源的时候，如果想要浏览器上直接播放，可以设置content-Dispostion: inline。如果不想直接播放，而是下载，则设置content-Dispotion: attchment。
[MDN Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

*状态码： 206*
[MDN HTTP 206](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)

种响应是在客户端表明自己只需要目标URL上的部分资源的时候返回的.这种情况经常发生在客户端继续请求一个未完成的下载的时候(通常是当客户端加载一个体积较大的嵌入文件,比如视屏或PDF文件),或者是客户端尝试实现带宽遏流的时候.

你可以通过Range请求头辨认出一个部分内容请求.该请求头表明了客户端需要请求资源的哪一部分:

在大多数情况下,客户端还会发送一些条件请求头,让服务器来辨别该返回哪个版本的资源.客户端把它在上次接收该资源的0到172032字节部分请求中服务器返回的ETag响应头作为了本次请求的If-Match请求头发送了出去,同样还把上次响应中的Last-Modified响应头用If-Unmodified-Since请求头发送了出去.

服务器的Content-Range响应头表明了返回的是文件的哪一部分,Content-Length响应头表明了该部分文件的大小:

*HTTP/204响应*

从Content-Length响应头可以看出,该响应没有响应体,状态码描述为“No Content”:

如果没有响应体,则在大多数场景下,这两种响应码完全等效,但有一种情况下,HTTP/204响应会让浏览器有不同的表现.这种情况就是当用户在浏览器窗口window或者frame/iframe框架中导航的时候.

- 如果导航到的URL返回了一个没有响应体的HTTP/200响应,则页面将会显示一个空白文档(就是一片白色).页面的URL地址也会变成新指定的URL.
- 如果服务器返回的是一个HTTP/204响应,当前页面不会有任何变化,就好像根本没有进行导航操作一样.页面的URL地址也保持不变.

HEAD请求方法

## 参考资料

[理解HEAD请求以及HTTP/204和HTTP/206响应](http://www.cnblogs.com/ziyunfei/archive/2012/11/17/2775421.html)