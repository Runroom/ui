const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: false,
  entry: glob
    .sync('./ui/components/**/scripts.js')
    .reduce(
      (entries, entry) => Object.assign(entries, { [entry.replace('/scripts.js', '')]: entry }),
      {}
    ),
  output: {
    filename: './[name]/scripts.min.js',
    path: path.resolve(__dirname)
  },
  mode: 'production',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
