const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptomizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const ShakePlugin = require("webpack-common-shake").Plugin;
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "build.[contentHash].js",
    path: path.join(__dirname, "../dist"),
  },
  optimization: {
    minimizer: [
      new OptomizeCssAssetsWebpackPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../src/template.html"),
        minify: {
          removeAttributeQuotes: true,
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
      new UglifyJsPlugin({
        exclude: /node_modules/,
      }),
    ],
  },
  plugins: [
    new ShakePlugin(),
    new ImageminPlugin({
      disable: false,
      pngquant: {
        quality: "65-90",
        speed: 4,
      },
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
});
