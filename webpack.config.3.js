let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
let webpack=require('webpack');
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
                test:/\.css$/,use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test:/\.less$/,use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ]
            }
        ]
    },
    plugins:[
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
