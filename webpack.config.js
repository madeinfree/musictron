const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendors.js'
    })
  ]
}
