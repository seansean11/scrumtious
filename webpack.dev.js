const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const cssnext = require('postcss-cssnext');
const cssimport = require('postcss-import');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './src/index'
  ],
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.png|\.svg$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:9000/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: () => {
    return [
      cssimport({
        path: __dirname + '/dist/',
        addDependencyTo: webpack
      }),
      cssnext()
    ];
  }
};

config.target = webpackTargetElectronRenderer(config);
module.exports = config;
