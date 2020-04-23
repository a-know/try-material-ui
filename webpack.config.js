const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      // cssファイルのload処理
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'], },
      {
        test: /\.(png|gif|jpg)$/,
        loader: 'file-loader?context=src/assets&name=[path][name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc',
        },
      },
    }),
    // MiniCssExtractPluginのインスタンスを追記
    // ここで設定するfilenameは出力するファイル名
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
  ],
  optimization: {
    // cssファイルの出力時に、圧縮して最小化する設定
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  devtool: 'inline-source-map'
};
