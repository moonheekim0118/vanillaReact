const path = require('path');

module.exports = {
  entry: './src/index.ts',
  watch:true,
  devServer: {
    contentBase: path.join(__dirname, "public/index.html"),
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
           'css-loader',
           'sass-loader',
        ],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js', '.scss' ],
  },
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/public',
    filename: 'bundle.js',
  },
};