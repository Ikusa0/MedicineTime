/** @type {import('webpack').Configuration} */

const Dotenv = require('dotenv-webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
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
            loader: 'style-loader'
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
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: './dist',
    historyApiFallback: true
  },
  plugins: [
    new Dotenv({ path: './.env.dev', safe: true }),
    new HTMLWebpackPlugin({ template: './template.dev.html' })
  ]
})
