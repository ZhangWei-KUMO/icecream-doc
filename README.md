# 经计栈

## 本地启动

```js
yarn start
```
## 主题的常量配置

```js
// 基础配置
const baseConfig = {
  logo: "", // logo 名称
  projectName: "", // 项目名称
  homeUrl: "/index.html", // 静态html位置，注意如果是Nginx等服务器配置需指向该文件
  library: "" // 源码的仓库位置
};

const themeConfig = {
  // 目录配置，按序列配置顺序
  categoryOrder: {
    前言: 0,
    社会主义经济理论: 1,
    概率论与数理统计: 2,
  },
  // 子目录配置
  typeOrder: {
    子目录1: 1
  }
};
```

## 当前应用的常量配置

配置文件位于`/theme/zh-CH.js`中。

```js
module.exports = {
  locale: "zh-CN",
  messages: {
    "app.home.url": "",     // 自定义首页url
    "app.btn.doc": "", // 首页按钮文本
    "app.footer.name": "" // 设置底部文字
  }
};
```
## 文档的编写

原则上直接在`docs`文件夹下面放入markdown文件即可生成页面，但是要注意的是，每个文件的头部需要与自定义的`category`相对应

```markdown
---
category: 《苟利国家生死以》
order: 0
title: 前言
---
```

## 微信生态转发功能

有些用户有文档转发微信朋友圈的需求，针对这个需求在`theme/template/utils`文件夹中，有两个文件用于微信H5配置：

* share.jsx
* wechart.jsx


