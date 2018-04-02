const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackInlineManifestPlugin = require('webpack-inline-manifest-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default


module.exports = {
  mode: 'production',
  bail: true,
  entry: './src/index.js',

  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        initialVendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new ImageminPlugin(),
    new HtmlWebpackPlugin({
      template: './index.ejs'
    }),
    new WebpackInlineManifestPlugin({
      name: 'webpackManifest'
    })
  ]
};