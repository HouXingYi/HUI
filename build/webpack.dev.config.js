
const opn = require('opn');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const merge = require('webpack-merge');
const webpackMiddleware = require("webpack-dev-middleware");
//webpack基础配置
const webpackBaseConfig = require('./webpack.base.config.js');
//webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
//webpack配置
var config = merge(webpackBaseConfig, {
    // 入口
    entry: {
        main: './examples/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            iview: '../../src/index',
            vue: 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});

//起服务并调用webpackMiddleware编译
const app = express()
const compiler = webpack(config)
app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));
//热更新
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
})
app.use(hotMiddleware)
opn('http://localhost:3333');
app.listen(3333);

