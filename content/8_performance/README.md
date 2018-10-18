# 性能优化

## 网络优化

**dns-prefetch**,DNS Prefetch是前端优化的一部分，主要功能：减少DNS请求次数；进行DNS预获取。DNS Prefech让具有此属性的域名不需要用户点击链接就在后台解析，而域名解析和内容载入时串行的网络操作，DNS预解析减少等待时间，提升用户体验。

目前大多数浏览器已经支持此属性

– Safari: 5+
– Chrome: All
– Firefox: 3.5+
– Opera: Unknown
– IE: 9+ (called “Pre-resolution” on blogs.msdn.com)

在页面`<meta charset="UTF-8">`后面，增加如下代码：（具体的DNS可以用火狐浏览器查看HTTP请求）

```html
<meta http-equiv="x-dns-prefetch-control" content="on" />
<link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />
<link rel="dns-prefetch" href="http://nsclick.baidu.com" />
<link rel="dns-prefetch" href="http://hm.baidu.com" />
<link rel="dns-prefetch" href="http://eiv.baidu.com" />
```

## 参考资料

[js-leakage-patterns](https://github.com/zhansingsong/js-leakage-patterns) 🎯这是关于JavaScript内存泄露和CSS优化相关序列文章，相信你读完会有所收获的✈️. 整个仓库的文章都是一些高质量的文章，强烈推荐细度几遍。👍👍👍

[前端性能优化相关](https://github.com/wy-ei/notebook/issues/34)
