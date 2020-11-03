require('dotenv').config()
const
    common = require('./config/webpack.common'),
    dev = require('./config/webpack.dev'),
    prod = require('./config/webpack.prod'),
    {merge} = require('webpack-merge')

module.exports = () =>{
    switch(process.env.NODE_ENV){
        case 'development' :
            return merge(common,dev)
        case 'production' :
            return merge(common,prod)
        default :
            throw new Error('No matching configuration found!')
    }
}