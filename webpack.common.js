const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/js/index.js'
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Weather App',
       template: './src/index.html'
     }),
   ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };