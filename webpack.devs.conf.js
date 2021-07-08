const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

const webpackDevConfig = merge(webpackBaseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: webpackBaseConfig.externals.paths.dist,
    port: 3000,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(webpackDevConfig);
});
