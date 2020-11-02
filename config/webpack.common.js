const
    path = require('path')
const
    resolve = p => path.resolve(__dirname,'../'+p)
module.exports = {
    entry:{
        acceleration: './src/js/acceleration.js',
        fireworks: './src/js/fireworks.js',
        navigation: './src/js/navigation.js',
        particles: './src/js/particles.js',
        trig: './src/js/trig.js',
        vectors: './src/js/vectors.js',
        velocity: './src/js/velocity.js',
    },
    output:{
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname,'../dist')
    },
    resolve:{
        alias:{
            "@": resolve('src')
        }
    },
    plugins:[],
    module:{},
}