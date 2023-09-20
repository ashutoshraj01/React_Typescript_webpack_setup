const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      // creating constant env variable for prod environment
      'process.env.name': JSON.stringify('Ashutosh Raj is in prod now'), // we can have api endpoints
    }),
    new BundleAnalyzerPlugin(), // Gives visual idea of bundle size on browser.
  ],
}
