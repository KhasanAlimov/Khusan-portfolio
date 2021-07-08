const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const Paths = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist"),
  assets: "assets/",
};

module.exports = {
  externals: {
    paths: Paths,
  },
  entry: {
    app: Paths.src,
  },
  output: {
    filename: `${Paths.assets}js/[name].js`,
    path: Paths.dist,
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          context: path.resolve(__dirname, "src/"),
          outputPath: 'assets/',
          publicPath: '../',
          useRelativePaths: true,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: {
          name: `[path][name]_[contenthash:8].[ext]`,
          context: path.resolve(__dirname, "src/"),
          outputPath: 'assets/',
          publicPath: '../',
          useRelativePaths: true,
        },
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: ["autoprefixer", "css-mqpacker", "cssnano"],
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${Paths.assets}css/[name].css`,
    }),
    new htmlWebpackPlugin({
      hash: false,
      template: `${Paths.src}/index.html`,
      filename: "./index.html",
    }),
    new copyWebpackPlugin({
      patterns: [
        { from: `${Paths.src}/img`, to: `${Paths.assets}img` },
        { from: `${Paths.src}/static`, to: "" },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
};
