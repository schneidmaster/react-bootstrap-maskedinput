import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackIncludeAssetsPlugin from 'html-webpack-include-assets-plugin';

export default {
  entry: './example/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'],
      append: true
    })
  ]
}
