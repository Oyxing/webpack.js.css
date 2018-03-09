module.exports = {
    entry: __dirname + "/app/maincss.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/publiccss",//打包后的文件存放的地方
        filename: "[name].css"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            { 
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]

    }
};
