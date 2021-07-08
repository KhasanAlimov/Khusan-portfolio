const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

const webpackBuildConfig = merge(webpackBaseConfig, {
  mode: "production",
  plugins: [],
});

module.exports = new Promise((resolve, reject) => {
  resolve(webpackBuildConfig);
});
