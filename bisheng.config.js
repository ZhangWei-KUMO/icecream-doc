const path = require('path');
const packa = require('./package.json');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const VERSION = packa.version;
const ENV = process.env.NODE_ENV;
module.exports = {
    root: ENV === 'development' ? '/' : '/icecream',
    target: 'node',
    devtool: 'inline-source-map',
    webpackConfig(config) {
        config.node = {
            fs: "empty",
            module: "empty",
            child_process: "empty",
            net: "empty",
        }
        config.optimization.minimize = true;
        config.optimization.splitChunks = {
            chunks: 'async',
            minSize: 50000,
            maxSize: 80000,
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
        config.plugins.push(
            new LodashModuleReplacementPlugin(),
        )
        // if (ENV === 'preview') {
        //     const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        //     config.plugins.push(
        //         new LodashModuleReplacementPlugin()
        //     )
        //     config.module.rules.push({
        //         loaders: [
        //             { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
        //         ]
        //     })
        // }

        config.module.rules.push({
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            query: {
                'plugins': [
                    'lodash',
                    ["@babel/plugin-transform-modules-commonjs", {
                        "allowTopLevelThis": false
                    }]
                ],
                'presets': [['@babel/env', { 'targets': { 'node': 6 } }]]
            }
        });

        config.output = {
            filename: `[name].${VERSION}.js`,
            chunkFilename: `[name].bundle.${VERSION}.js`,
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