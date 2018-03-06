const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './src/index',
    ],
    output: {
        filename: "index.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jpg", ".png"],
    },
    plugins: [
			new HtmlWebpackPlugin(),
			new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [
            {
							test: /\.tsx?$/,
							use: ['babel-loader', 'awesome-typescript-loader'],
						},
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "raw-loader" }
                ],
            },
            {
							test: /\.(jpg|png|svg)$/,
							loader: "url-loader",
					},
        ],
    },
    devServer: {
        hot: true,
        inline: true,
    },
    devtool: "eval",
};