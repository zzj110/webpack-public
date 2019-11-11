let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
let webpack = require('webpack');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let CssExtract = new ExtractTextWebpackPlugin({
    filename: 'css/css.css'
});
let CopyWebpackPlugin = require('copy-webpack-plugin');

let PurifyCssWebpack = require('purifycss-webpack');
let glob = require('glob');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve('./build')
    },
    devServer: {
        contentBase: './build',
        port: 3000,
        compress: true,
        open: true,
        hot: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: CssExtract.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            })
        }]
    },
    plugins: [
        CssExtract,
        //拷贝插件
        new CopyWebpackPlugin([{
            from: './src/doc',
            to: 'public'
        }]),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'webpack',
            hash: true
        }),
        //没用的css消除掉，一定放在htmlwebpackplugin后面
        new PurifyCssWebpack({
            paths: glob.sync(path.resolve('src/*.html'))
        })
    ],
    mode: 'development',
    resolve: {},
}


// 抽离样式 抽离到css文件 通过css文件的方式来引用