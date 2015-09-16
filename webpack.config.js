var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    cache: true,

    context: path.join(__dirname, 'src'),
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: "modules/[chunkhash].js"
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer-loader?browsers=last 2 version',
            exclude: /node_modules/
        }, {
            test: /\.scss/,
            loader: 'style!css!autoprefixer-loader?browsers=last 2 version!sass',
            exclude: /node_modules/
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "example/index.html",
            favicon: "src/img/favicon.ico"
        })
    ],

    devtool: 'eval',

    devServer: {
        contentBase: "./src",
        host: "0.0.0.0"
    },

    externals: {
        mithril: 'm'
    }
};