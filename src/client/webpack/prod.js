const merge = require('webpack-merge'); // For merging this config // with base.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // To minify // your JS file in the build folder
const CopyPlugin = require('copy-webpack-plugin'); // To copy your // assets to the build folder
const base = require('./base'); // Importing base.js file
module.exports = merge(base, { // Merging this config with base.js // config 
   mode: 'production', // enable webpack's built-in optimizations  // that correspond to production
   output: {    
      filename: 'bundle.min.js', // The name of the built JS file
   },  
   devtool: false, // We don't need this in our production
   performance: {    
      maxEntrypointSize: 900000, 
      maxAssetSize: 900000, // These configure the file size limit // of your build, webpack send you warnings if it is exceeded
   },  
   optimization: {
      minimizer: [
         new TerserPlugin({
            terserOptions: {
               output: {
                  comments: false, // Tell Terser Plugin to remove // comments in your minified file
               },
            },
         }),
      ],
   },  
   plugins: [
      new CopyPlugin({ 
         patterns: [
            { from: './src/assets', to: 'src/assets' }, // Configure // the path from where webpack will copy your assets from and the  // path where it will put it when the build is done, change it     // according to your app organization   
         ],
      }),
   ],
});