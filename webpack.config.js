const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};