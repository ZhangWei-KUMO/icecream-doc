const path = require('path');

module.exports = {
    root: '/icecream/',
    devtool: 'inline-source-map',
    webpackConfig(config) {
        config.target = 'node';
        config.externals = ["fs", "child_process", "module"];
        config.optimization.minimize = true;

        config.optimization.splitChunks = {
            chunks: 'async',
            minSize: 80000,
            maxSize: 560000,
            minChunks: 5,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
        config.module.rules.push({
            test: /\.(js|jsx)$/, use:
            {
                loader: 'babel-loader',
                options:
                {
                    presets: [
                        ['@babel/preset-env'], '@babel/react'
                    ]
                }
            }
        });
        config.output = {
            filename: "[name].js",
            chunkFilename: '[name].bundle.js',
        }
        return config;
    },
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
        homeUrl: "/docs/cn/getting-started-cn.html",
        library: "https://github.com/ZhangWei-KUMO/icecreamd"
    }
};