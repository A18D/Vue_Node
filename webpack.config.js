const path = require('path');
var webpack = require ('webpack');
var ExtractTextWebpackPlugin = require ('extract-text-webpack-plugin');
const UglifyJsPlugin = require ('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin ({
  __DEV__: JSON.stringify (JSON.parse (process.env.DEBUG || 'false')),
});

process.noDeprecation = true;

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: './src/bundle.js',
    sourceMapFilename: './src/bundle.map',
  },

  devtool: '#source-map',

  resolve: {
    alias: {
      libs: path.resolve (__dirname, 'src/lib/'),
      styles: path.resolve (__dirname, 'src/css/'),
      img: path.resolve (__dirname, 'src/images/'),
      fonts: path.resolve (__dirname, 'src/fonts/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'],
        },
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require ('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require ('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './src/fonts/',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './src/images/',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin ({
        sourceMap: true,
        warnings: false,
        mangle: false,
      }),
    ],
  },

  devServer: {
    stats: 'errors-only',
  },

  plugins: [
    new webpack.DefinePlugin ({
      'process.env': {
        NODE_ENV: JSON.stringify ('production'),
      },
    }),
    new HtmlWebpackPlugin ({
      hash: true,
      template: './src/index.html',
      title: 'Test react app',
      myPageHeader: 'Automatically generated',
      filename: 'index.html', //relative to root of the application
    }),
    // new ExtractTextWebpackPlugin('bundle.css')
    devFlagPlugin,
  ],
};
