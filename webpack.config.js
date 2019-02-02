const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: "./dist"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}
