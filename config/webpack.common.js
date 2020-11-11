const
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackInjector = require('html-webpack-injector'),
    isProd = process.env.NODE_ENV==='production'
const
    minify = isProd ? {
        removeAttributeQuotes:false,
        collapseWhitespace:false,
        removeComments:false
    } : null,
    resolve = p => path.resolve(__dirname,'../'+p)
const
    htmlFactory = t => new HtmlWebpackPlugin({
        inject: true,
        minify,
        template: `./src/${t}.html`,
        filename: `${t}${isProd ? '[hash].' : '.'}html`,
        chunks: [t,'common_head'],
        favicon: './src/assets/favicon.ico'
    })
module.exports = {
    entry:{
        acceleration: './src/js/acceleration.js',
        fireworks: './src/js/fireworks.js',
        navigation: './src/js/navigation.js',
        particles: './src/js/particles.js',
        trig: './src/js/trig.js',
        vectors: './src/js/vectors.js',
        velocity: './src/js/velocity.js',
        gravity: './src/js/gravity.js',
        common_head: './src/js/common.js'
    },
    output:{
        filename: 'js/[name].[chunkhash].js',
        path: path.resolve(__dirname,'../dist')
    },
    resolve:{
        alias:{
            "@": resolve('src')
        }
    },
    plugins:[
        htmlFactory('acceleration'),
        htmlFactory('fireworks'),
        htmlFactory('navigation'),
        htmlFactory('trig'),
        htmlFactory('velocity'),
        htmlFactory('gravity'),
        new HtmlWebpackInjector()
    ],
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
}