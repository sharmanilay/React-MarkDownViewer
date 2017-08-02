var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname +'/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/js/index.babel',
  module: {
    loaders: [
      {
        test: /\.js$/,
        test: /\.babel$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname +'/js'
  },
  plugins: [HTMLWebpackPluginConfig]
};
