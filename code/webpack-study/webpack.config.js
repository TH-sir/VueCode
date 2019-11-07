const path = require('path')
const htmlWebpackPlugin = require('html-Webpack-Plugin')

module.exports ={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{// 这个节点用于配置所有的第三方模块 加载器
        rules:[ // 第三方模块匹配规则
            {test:/\.css$/, use:['style-loader','css-loader']},
            // 第三方 loader 规则
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=12084&[hash:8]-[name].[ext]'},
        ]
    }
}