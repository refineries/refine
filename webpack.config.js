/* eslint-disable @typescript-eslint/no-var-requires */
require('./global')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')

module.exports = {
  mode: global.__NODE_ENV__,
  entry: {
    main: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', 'scss', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.css|\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.js|\.ts|\.jsx|\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
        ],
        loader: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      // 将async设为false，可以阻止Webpack的emit以等待类型检查器/linter，并向Webpack的编译添加错误。
      async: false,
    }),
    // 将TypeScript类型检查错误以弹框提示
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: true,
      skipSuccessful: true,
    }),
  ],
  devServer: {
    contentBase: path.join('./src'),
    compress: true,
    port: 1200,
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
}
