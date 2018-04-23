const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8081,
    proxy: {
      "/api/ws": {
        "target": "ws://localhost:8080",
        "ws": true
      }
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};