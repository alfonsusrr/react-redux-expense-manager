// entry -> output
const path = require('path')
module.exports = {
    entry: './src/app.js',
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
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/,
        }]
    },
    mode:'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './public/'), // bundle.js is not made to make process faster using devServer
        },
        historyApiFallback: true,
    },

}

// Loader : babel-core, babel-loader

