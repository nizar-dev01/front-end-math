const
    path = require('path')
module.exports = {
    devServer:{
        port: process.env.PORT || 3000,
        contentBase: path.join(__dirname, '../dist'),
        overlay: true,
        open: true,
        openPage: '/acceleration.html'
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