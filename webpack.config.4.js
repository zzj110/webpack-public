let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
let webpack=require('webpack');
let ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'[name].[hash:8].js',
        path:path.resolve('./build')
    }, 
    devServer:{
        contentBase:'./build',
        port:3000,
        compress:true,  
        open:true,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,use:ExtractTextWebpackPlugin.extract({
                    use:[
                        {loader:'css-loader'}
                    ]
                })
            },
            {
                test:/\.less$/,use:ExtractTextWebpackPlugin.extract({
                    use:[
                        {loader:'css-loader'},
                        {loader:'less-loader'}
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'css/index.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'webpack',
            hash:true
        })
    ],
    mode:'development',
    resolve:{},
}


// 抽离样式 抽离到css文件 通过css文件的方式来引用