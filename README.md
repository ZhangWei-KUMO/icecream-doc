# Icecream Design Document

从项目内容上来说这个Icecream Design的文档，但是从开源角度来说这是一个基于Antd Design的文档管理网站。

## 特点

* 便捷的用户自定义主题；
* 清晰的文档结构；
* 支持i18n中英双语切换；
* 支持前端组件代码在markdown文件中渲染；
* 前端代码splitchunk优化及压缩gz文件；
* 移动端自适应；
* 前后端路由同构；
* eslint规范代码格式；
* 雪碧图前端代码包分析；
* 物理机和Docker容器两种部署方式；

## 环境

支持IE11+ 以上浏览器

## 目录结构
```bash
├── .
├── .gitignore         // git 忽略
├── .gitignore         // git 忽略
├── conf               // nginx 配置
├── README.md          // 文档说明
├── bisheng.config.js  // 全局配置文件
├── components         // 组件功能
├── dist               // 打包后静态文件输出目录
├── docs               // markdown 文件
├── default.conf       // docker nignx 配置文件
├── Dockerfile         // docker 构建  
├── package.json       // 项目依赖
├── theme              // 基于 Ant Desgin 的主题
└── gulpfile.js        // gulp代码压缩
```

## 使用

```bash
# 启动项目
yarn start
# 查看打包后文件结构
yarn preview
# 项目打包
yarn build
# 项目打包并代码压缩
yarn compress
```

## 编程语言的配置

