const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

// const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

// module.exports = merge(common, {
// module.exports = (env) => {
module.exports = (env) => {
  console.log(env);
  const currentPath = path.join(__dirname, "../", "env");

  const basePath = currentPath + "/.env";
  const envPath = basePath + "." + env;
  console.log(envPath);
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  console.log(finalPath);
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    mode: "development",
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "../dist"),
    },
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendors.js",
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs",
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../src/template.html"),
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin(envKeys),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
    },
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
  };
};
