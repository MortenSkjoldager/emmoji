const webpack = require('webpack'); 
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = { 
   mode: 'development', 
   devtool: 'eval-source-map', 
   module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
   plugins: [
      new CleanWebpackPlugin({
         root: path.resolve(__dirname, '../'),
      }), 
      new webpack.DefinePlugin({
         CANVAS_RENDERER: JSON.stringify(true),
         WEBGL_RENDERER: JSON.stringify(true),
      }), 
         new CopyWebpackPlugin({
            patterns: [
               { from: './src/assets', to: 'assets' },
               { from: './src/scenes/tilemaps', to: 'tilemaps'}
            ]
      }),
      new HtmlWebpackPlugin({
         template: './index.html',
      }), 
   ],
}