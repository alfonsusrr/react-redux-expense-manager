// entry -> output
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, './src/app.js'),
    output: {
        path: path.join(__dirname, './public/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/,
        }]
    },
    plugins: [
                new MiniCssExtractPlugin({
                    filename: "css/styles.css",
                }),
                new HtmlWebpackPlugin({
                    title: 'Boilerplate',
                    filename: 'index.html',
                    template: path.join(__dirname, "public/index.html"),
                })
            ]
}

// Loader : babel-core, babel-loader

