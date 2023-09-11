const webpack = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({  // creating constant env variable for prod environment
            'process.env.name': JSON.stringify('Ashutosh Raj is in prod now') // we can have api endpoints
        })
    ]
}