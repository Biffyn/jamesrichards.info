const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './design'
  },
  output: {
    filename: `js/[name].[chunkhash].js`,
    path: path.resolve(__dirname, 'hugo/static/design')
  },
  resolve: {
    extensions: ['.ts', '.scss', '.css', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  //mode: process.env.NODE_ENV,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['js', 'css'], {
      root: path.join(__dirname, 'hugo/static/design'),
      beforeEmit: true,
      watch: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: '[id].css'
    }),
    new AssetsPlugin({
      filename: 'webpack_assets.json',
      path: path.join(__dirname, './hugo/data/'),
      prettyPrint: true
    })
  ]
};
