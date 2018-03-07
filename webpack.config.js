const webpack = require('webpack');
const path = require('path')
module.exports = {
    entry: './src/index',
    output: {
			path: path.resolve(__dirname, '.'),
      filename: "index.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jpg", ".png",".svg"],
    },

    module: {
        rules: [
            {
							test: /\.tsx?$/,
							use: 'awesome-typescript-loader',
						},
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "raw-loader" }
                ],
            },
            {
								test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader?limit=10000'
            },
        ],
    },

    devtool: "inline-source-map",
};