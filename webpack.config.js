"use strict";
const path = require("path");
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const webpackConfig =
  process.env.NODE_ENV === "dev"
    ? {
        mode: "development",
        devtool: "inline-source-map",
        watch: true,
      }
    : {
        mode: "production",
      };

module.exports = Object.assign({}, webpackConfig, {
  stats: {
    colors: true,
  },
  entry: {
    top: "./src/js/Main.coffee",
  },
  output: {
    path: `${__dirname}/htdocs/assets/js`,
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [
          {
            loader: "coffee-loader",
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "json-loader",
          },
        ],
      },
      {
        test: /\.(vert|frag|glsl)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".coffee", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src/js"),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      notify: false,
      server: {
        baseDir: ["./htdocs/"],
      },
      open: "external",
      injectChanges: true,
      files: ["./htdocs/**/*.js", "./htdocs/**/*.css", "./htdocs/**/*.html"],
      ghostMode: false,
    })
  ],
  performance: {
    maxAssetSize: 9000000,
    maxEntrypointSize: 9000000,
  },
});
