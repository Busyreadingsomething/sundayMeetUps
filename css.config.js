const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './cssSelectors/app/index.jsx'),
  output: {
    path: path.resolve(__dirname, './cssSelectors/public'),
    filename: 'cssSelector.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  }
}