const path = require('path');
// const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index',
  ],
  output: {
    path: path.join(__dirname, 'dist', 'build'),
    filename: 'bundle.js',
    publicPath: '/dist/build/'
  },

  // postcss: [
  //   autoprefixer({
  //     browsers: ['last 2 versions'],
  //   }),
  // ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [path.join(__dirname, './client')],
  },
  module: {
    loaders: [
    // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader',
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('base.css', {
      allChunks: true,
    }),
  ],
};
