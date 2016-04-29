const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass?{precision:10}']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
}
