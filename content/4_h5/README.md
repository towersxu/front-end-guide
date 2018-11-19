# H5开发知识点

## webview播放音频常见问题

**视频格式**，目前移动端（Android和Ios的webview）视频播放兼容性较好的格式有两种，1种是HLS格式(m3u8),另外一种是mp4。

ios webview 无法播放 H5 视频, ios 端不支持自动运行 onloadeddata 方法，需要设置 autoplay 属性为 true 才行。[https://stackoverflow.com/questions/33300294/html5-video-loadeddata-event-does-not-work-in-ios-safari](https://stackoverflow.com/questions/33300294/html5-video-loadeddata-event-does-not-work-in-ios-safari)

IOS自动全屏的问题
[https://stackoverflow.com/questions/3699552/html5-inline-video-on-iphone-vs-ipad-browser](https://stackoverflow.com/questions/3699552/html5-inline-video-on-iphone-vs-ipad-browser)

小米和VIVO无法播放mp4的问题，要求视频返回的content-Dispositon: inline, HTTP状态码为206