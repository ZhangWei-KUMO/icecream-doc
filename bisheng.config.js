const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    source: {
        components: './components',
        docs: './docs',
    },
    output: './dist',
    theme: './theme',
    htmlTemplate: path.join(__dirname, './theme/static/template.html'),
    // 主题配置
    themeConfig: {
        categoryOrder: {
            前言: 1,
            文档: 2,
        },
        typeOrder: {
            通用: 1,
            数据展示: 1,
        }
    },
    lessConfig: {
        javascriptEnabled: true,
    },
    baseConfig: {
        logo: "https://test-1253763202.cos.ap-shanghai.myqcloud.com/applications/icecream.png",
        projectName: "Icecream Design",
        homeUrl: "/docs/react/getting-started.html",
        library: "https://github.com/ZhangWei-KUMO/icecreamd"
    }
};