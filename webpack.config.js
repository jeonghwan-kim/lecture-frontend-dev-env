const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const apiMocker = require('connect-api-mocker');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    open: true, 
    before: (app, server, compiler) => {
      app.get('/api/keywords', (req, res) => {
        res.json([
          { keyword: '이탈리아' },
          { keyword: '세프의요리' }, 
          { keyword: '제철' }, 
          { keyword: '홈파티'}
        ])
      })
      app.use(apiMocker('/api', 'mocks/api'))
    },
    host: 'dev.domain.com',
    stats: 'errors-only',
    overlay: true,
    port: 8081,
    historyApiFallback: true,
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|svg|png)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    }),
  ]
};
