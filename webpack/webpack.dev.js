const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/template.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    historyApiFallback: true,
    compress: true,
    port: 8080,
    open: "Chrome",
    watchContentBase: true,
    hot: true,
    https: true,
  },
  devtool: "inline-source-map",
});
