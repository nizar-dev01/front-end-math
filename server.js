const
  express = require('express'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  app = express(),
  config = require('./webpack.config.js'),
  compiler = webpack(config),
  port = process.env.PORT || 3001
  
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))


app.listen(3001, function () {
  console.log(`App Started on 127.0.0.1:${port}`);
})