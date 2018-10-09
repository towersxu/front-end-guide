# HTML

> 如果一点前端基础都没有，请直接按照最下面的教程开始，如果已有基础知识，仅需关注重要的知识点即可。

## 基础知识点1️⃣

**title属性**规定关于元素的额外信息。

这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）。

> 在显示的内容被省略的时候，可以加一个title属性，快速实现提示文本

**alt属性**
alt定义有关图形的短的描述。在图片加载失败了的时候，会显示该描述。

**onerror属性**
找图片加载失败了的时候，可以使用onerror将图片替换为默认图片。注意，一定要在onerror里面将onerror置空，不然在新的图片也加载失败后，会形成死循环

```html
<img src="http://example.com/a.png"
     onerror="this.onerror='';this.src='http://example.com/b.png'">

```

## 扩展知识点2️⃣

### meta

> meta标签是HTML语言HEAD区的一个辅助性标签。meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。

**keywords**说明：用于告诉搜索引擎，你网站的主要内容。举例：

```html
<meta keywords="讯飞,乐知行,数字校园">
```

**description**说明：用于告诉搜索引擎，你网站的主要内容。举例：

```html
<meta name="description"content="文科生，热爱前端与编程。目前大二，这是我的前端博客">
```

**viewport**的作用是限制网站的初始包含块元素，即 html 元素,viewport的作用比较复杂，参考资料：

[浅说移动前端中 Viewport 和 Viewport units](https://github.com/dwqs/blog/issues/69)

**指定浏览器渲染模式**, 国产浏览器大多是双内核,浏览器自动选择经常判断错误，导致本来使用Webkit可以获得更好浏览效果的网站错误在IE模式中带着BUG运行。可以通过meta标签指定浏览模式。

```html
  <meta name="renderer" content="webkit">
  <meta name="force-rendering" content="webkit">
  <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
```

**DOM**文档对象模型，是 HTML 和 XML 文档的编程接口。[HTML DOM 教程](http://www.runoob.com/htmldom/htmldom-tutorial.html)

## 教程1️⃣

[MDN HTML教程](https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML) 1️⃣