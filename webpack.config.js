const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: [ "@babel/preset-env", "@babel/preset-react" ]
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: [ "@babel/preset-env", "@babel/preset-react" ]
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack test',
      template: path.resolve(__dirname, 'src/template.html'),
    }),
    new CleanWebpackPlugin(),
  ],
}