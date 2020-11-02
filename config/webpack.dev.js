const
    path = require('path')
module.exports = {
    devServer:{
        port: 3000,
        contentBase: path.join(__dirname, '../dist')
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}