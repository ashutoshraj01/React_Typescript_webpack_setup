const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    // devserver: {
    //     hot: true
    // },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({  // creating constant env variable for dev environment
            'process.env.name': JSON.stringify('Ashutosh')
        }),
        new ReactRefreshWebpackPlugin(),
    ]
}

