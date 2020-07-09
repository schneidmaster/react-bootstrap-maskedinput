const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");

module.exports = {
  entry: "./example/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css",
      ],
      append: true,
    }),
  ],
};
