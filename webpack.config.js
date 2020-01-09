const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const apiMocker = require('connect-api-mocker')

const mode  = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  devServer: {
    overlay: true,
    stats: 'errors-only',
    before: (app, server, compiler) => {
      app.use(apiMocker('/api', 'mocks/api'));
    },
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [
        mode === 'production' 
        ? MiniCssExtractPlugin.loader  // 프로덕션 환경
        : 'style-loader',  // 개발 환경
        'css-loader', 
        'sass-loader'
      ], 
    },{
      test: /\.(png|jpg|svg)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]?[hash]', 
        limit: 5000 
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // 바벨 로더를 추가한다 
    }]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `빌드 날짜: ${new Date().toLocaleString()}`,
    }),
    new webpack.DefinePlugin({
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      templateParameters: { 
        env: mode === 'development' ? '(개발용)' : '', 
      },
      minify: mode === 'production' ? { 
        collapseWhitespace: true, // 빈칸 제거 
        removeComments: true, // 주석 제거 
      } : false,
      hash: mode === 'production'
    }),
    new CleanWebpackPlugin(),
    ...(
      mode === 'production' 
      ? [ new MiniCssExtractPlugin({filename: `[name].css`}) ]
      : []
    ),
  ]
}

