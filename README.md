# Antd bisheng docs
<br/>

一个从 `Ant Design` 文档抽离出来的简化版文档工具，可用于快速构建及管理项目接口文档、个人学习笔记等。

<br/>

## Demo 示例
<br/>

 - 请点击 [在线预览](http://api.slowlog.cn)


<br/>

## 目录结构
<br/>

```bash

├── .
├── .gitignore         // git 忽略
├── README.md          // 文档说明
├── bisheng.config.js  // 全局配置文件
├── components         // 组件功能
├── dist               // 打包后静态文件输出目录
├── docs               // markdown 文件
├── default.conf       // docker nignx 配置文件
├── Dockerfile         // docker 构建  
├── package.json       // 项目依赖
└── theme              // 基于 Ant Desgin 的主题

```
<br/>

## 项目启动&打包
<br/>


- `npm i --registry=https://registry.npm.taobao.org // 安装项目依赖`

- `npm start // 启动项目`

- `npm run clean // 清除 dist 目录下的静态文件`

- `npm run prod // 打包项目、静态文件生成目录为当前目录的 dist`

<br/>

## Nginx 配置
<br/>

```bash

server {
    listen 80;

    server_name api.domain.com;

    root /www/antd-bisheng-docs/dist;

    location / {
        index index.html;
        rewrite ^/$ /docs/react/getting-started.html redirect;
    }

    error_page  500 502 503 504 404 http://api.domain.com/docs/react/getting-started.html;

}

```
<br/>

## 使用 Docker 构建此项目
<br/>

```bash

FROM nginx:1.14.0-alpine

COPY . /www/antd-bisheng-docs

COPY default.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 0777 /www/antd-bisheng-docs

CMD ["nginx", "-g", "daemon off;"]

```
<br/>

## 注意事项
<br/>

- 模板文件路径 `./theme/static/template.html`

- 首页为空白页，需用 nginx rewrite 至指定页面

- 目前仅支持中文，如需使用其他语言请自行解决

- 如需访问某指定页面可通过，例如：http://api.slowlog.cn/docs/react/sign-rule.html

## 多语言管理

`theme`文件夹负责管理多语言，其中`zh-CN.js`文件为中文模板，`en-US`文件为英文模板。

### Components

React Intl有一组React组件，它们提供了一种声明性的方式来设置i18n上下文并设置日期，数字和字符串的格式，以便在Web UI中显示。这些组件通过基于React Intl的命令式API来渲染React元素。

<Formatted*>声明式组件比起API的方式优势在于：

* 直接在UI上渲染；
* 像<FormattedMessage>组件可以直接对富文本字符串进行格式化；
* 像<FormattedRelativeTime>高级组件还可以根据不同的时间进行更新；
* 支持TypeScript。

在组件中<IntlProvider>是最基础的必须组件，它用于创建整个应用的i18n多语言上下文环境。在参数属性中分为以下几类：

```ts
interface IntlConfig {
    locale:string ;// 用户所在地区
    defaultLocale:string; // 默认地区
    formats: any; // 格式
    defaultFormats:any; // 默认格式
    messsage:Object;  // 开发者自定义的字段对象 
    timeZone?:string; // 用户所在时区
    onError:string; // 错误提示
}
```

下面是几个实例：

```js
  // 通过浏览器navigator对象确定用户当前所用语言
  <IntlProvider locale={navigator.language}>
    <App importantDate={new Date(1459913574887)} />
  </IntlProvider>,
```