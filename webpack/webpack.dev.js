const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({  // creating constant env variable for dev environment
            'process.env.name': JSON.stringify('Ashutosh')
        })
    ]
}

