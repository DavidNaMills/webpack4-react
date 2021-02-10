const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

// module.exports = (env) => {
module.exports = {
  // const currentPath = path.join(__dirname, "/env");

  // const basePath = currentPath + "/.env";
  // const envPath = basePath + "." + env.ENVIRONMENT;
  // const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // const fileEnv = dotenv.config({ path: finalPath }).parsed;
  // const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  //   prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  //   return prev;
  // }, {});

  // return {
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
        test: /\.scss$/,
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
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // , new webpack.DefinePlugin(envKeys)
  ],
};
// };
