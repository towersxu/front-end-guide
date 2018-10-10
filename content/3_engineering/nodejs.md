# nodejs搭建前端开发环境

> Web 前端开发涉及多种工具，而很多工具都是基于nodejs。例如前面vue中提到的vue-cli。

## 安装nodejs

经过实际，目前建议使用nvm搭建nodejs环境更加方便，而且也有利于随时切换nodejs版本。

[nvm](https://github.com/creationix/nvm)

[nvm-windows](https://github.com/coreybutler/nvm-windows)

### nodejs版本选择

依据[nodejs版本计划表](https://github.com/nodejs/Release#release-schedule)依据在社区中各种工具的开发情况，建议使用Active LTS版本，大致上是nodejs最新的偶数版本减2。

### npm

> npm是前端的包管理工具，和后端的maven类似。

npm只需要了解到[package.json](https://www.npmjs.com.cn/getting-started/using-a-package.json/)是管理依赖和项目配置的文件。安装的方式区别：

1.npm install本地安装

（1）将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。

（2）可以通过 require() 来引入本地安装的包。

2.npm install -g全局安装

  (1) 将安装包放在 /usr/local 下或者你 node 的安装目录。

  (2)可以直接在命令行里使用。

3.npm install --save

  (1)会把msbuild包安装到node_modules目录中

  (2)会在package.json的dependencies属性下添加msbuild

  (3)之后运行npm install命令时，会自动安装msbuild到node_modules目录中

  (4)之后运行npm install --production或者注明NODE_ENV变量值为production时，会自动安装msbuild到node_modules目录中

4.npm install --save-dev

  (1)会把msbuild包安装到node_modules目录中

  (2)会在package.json的devDependencies属性下添加msbuild

  (3)之后运行npm install命令时，会自动安装msbuild到node_modules目录中

  (4)之后运行npm install --production或者注明NODE_ENV变量值为production时，不会自动安装msbuild到node_modules目录中

> --save和--save-dev的区别在于，--save安装的包，会被引入到我们最终输入的代码中，也就是最终会在用户浏览器执行的包，比如（jquery,vue）。 --save-dev安装的包只会在开发者的开发环境上执行，用于协助开发者的开发的，比如(webpack,babel)。

深入了解： [npm 教程](https://www.npmjs.com.cn/getting-started/what-is-npm/) 3️⃣

### nvm 3️⃣

> 使用nvm管理npm源

由于npm中央仓库在国外，国内安装可能比较慢。或者某些包是我们公司内部的包，不方便发布到公网上，这时往往会搭建私库。就可以使用nvm来管理npm源了。

