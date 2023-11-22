/** @type {import('webpack').Configuration} */

const Dotenv = require('dotenv-webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s?)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    react: 'React',
    axios: 'axios',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new HTMLWebpackPlugin({ template: './template.prod.html' }),
    new MiniCssExtractPlugin({ filename: 'bundle-css-[contenthash].css' }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon.svg'
    })
  ]
})
