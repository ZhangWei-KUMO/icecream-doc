const path = require("path");
const packa = require("./package.json");
const { themeConfig, baseConfig } = require("./themeConfig");

const VERSION = packa.version;
const ENV = process.env.NODE_ENV;
const splitChunks = {
  chunks: "async",
  minSize: 50000,
  maxSize: 80000,
  minChunks: 5,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  automaticNameDelimiter: "~",
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
};

const babelConfig = {
  loader: "babel-loader",
  test: /\.(js|jsx)$/,
  query: {
    plugins: [
      "lodash",
      ["@babel/plugin-transform-modules-commonjs", {
        allowTopLevelThis: false
      }]
    ],
    presets: [["@babel/env", { targets: { node: 6 } }]]
  }
};
const ejsConfig = {
  test: /\.ejs$/,
  loader: "ejs-compiled-loader"
};
module.exports = {
  root: ENV === "production" ? "/icecream" : "/",
  devtool: "cheap-module-eval-source-map",

  webpackConfig(config) {
    if (ENV === "production") {
      const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
      config.node = {
        fs: "empty",
        child_process: "empty",
        module: "empty",
        net: "empty"
      };
      config.optimization.minimize = true;
      config.optimization.splitChunks = splitChunks;
      config.plugins.push(
        new LodashModuleReplacementPlugin()
      );
      config.module.rules.push(babelConfig);

      config.output = {
        filename: `[name].${VERSION}.js`,
        chunkFilename: `[name].bundle.${VERSION}.js`
      };
    } else {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      const nodeExternals = require("webpack-node-externals");

      config.node = {
        fs: "empty",
        child_process: "empty",
        net: "empty",
        module: "empty",
        ejs: "empty"
      };

      config.plugins.push(
        new BundleAnalyzerPlugin()
      );
      config.module.rules.push(ejsConfig);
      // config.externals = [
      //     nodeExternals()
      // ];
    }

    return config;
  },
  source: {
    components: "./components",
    docs: "./docs"
  },
  output: "./dist",
  theme: "./theme",
  htmlTemplate: path.join(__dirname, "./theme/static/template.html"),
  lessConfig: {
    javascriptEnabled: true
  },
  themeConfig,
  baseConfig
};
