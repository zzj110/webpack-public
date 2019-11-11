// 基于node的 遵循commonjs规范的

let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports={
    entry:'./src/index.js',  //入口
    output:{
        filename:'build.[hash:8].js',
        // 这个路径必须是绝对路径
        path:path.resolve('./build')
    }, //出口
    devServer:{
        contentBase:'./build',
        port:3000,
        compress:true,  //服务器压缩
        open:true,//自动打开浏览器
        //hot:true,

    },// 开发服务器
    module:{},// 模块配置
    plugins:[
        new CleanWebpackPlugin(),
        // 打包HTML插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'webpack',
            hash:true
            // minify:{
            //     removeAttributeQuotes:true,
            //     collapseWhitespace:true,
            // }
        })
    ],//插件的配置
    mode:'development',// 可以更改模式
    resolve:{},//配置解析
}


//在webpack中如何配置开发服务器webpack-dev-server
//https://www.npmjs.com/package/html-webpack-plugin  查找配置
//webpack插件 将HTML打包到build下可以自动引用生产的js