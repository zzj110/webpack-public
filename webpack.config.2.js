let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 单页  index.html 引用了多个js
// 多页  a.html index.js  /  b.html  a.js
module.exports={
    //entry三种写法：字符串，数组，对象
    //entry:['./src/index.js','./src/a.js'],
    entry:{  // 多入口 多出口
        index:'./src/index.js',
        a:'./src/a.js'
    },
    output:{
        filename:'[name].[hash:8].js',
        path:path.resolve('./build')
    }, 
    devServer:{
        contentBase:'./build',
        port:3000,
        compress:true,  
        open:true
    },
    module:{},
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'a.html',
            template:'./src/index.html',
            title:'webpack',
            hash:true,
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'b.html',
            template:'./src/index.html',
            title:'webpack',
            hash:true,
            chunks:['a']
        })
    ],
    mode:'development',
    resolve:{},
}
