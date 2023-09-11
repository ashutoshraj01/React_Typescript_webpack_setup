const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      { // For handling css files
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      {  // For handling images
        test: /\.(?:ico|gif|png|jgp|jpeg)$/i,
        type: 'asset/resource',
      },
      {   // For handling svg
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
}