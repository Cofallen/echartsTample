## echarts 模板

### 特点

* 采用`echarts.min.js`作为`echarts`模板，包含一些库；

*如果要使用npm安装echarts，请确保电脑已安装`node`，再执行`npm install echarts`，对应的引用路径需要修改 .*

* 采用`puppeteer`截图，要求名称为`index.html`，输出图片为`screemshot.png`.


### RUN

> 请配置`node`[环境](https://nodejs.org/zh-cn)，默认已配置完成
> 

1. 将代码下载到本地；
2. 点击`index.html`，添加内容；
3. 查看`index.html`是否正确显示；
4. 在文件夹终端下输入`node test.js`生成图片；

### 开发选项

1. `test.js`中`deviceScaleFactor`可提高图片分辨率；

### @TODO

* 多文件相互引用；
* 使用`py`或[`html2convas`](https://segmentfault.com/a/1190000021468917)获得高清图片；
* 整一个[`pdf`](https://blog.csdn.net/beyond__devil/article/details/84660702)版本 .