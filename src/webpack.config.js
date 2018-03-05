const webpack = require('webpack');


module.exports = {
    entry:[
        "./src/index"
    ],
    output: {
        filename: "index.js"
    },
    resolve:{
        extensions: [".tsx", ".ts", ".js", ".jpg", ".png"]
    },
    module: {
        rules:[
            {
                test: /\.tsx$/,
                use:[
                    
                ]
            }
        ]
    }
};
// module.exports = {
//     entry: [
//         "react-hot-loader/patch",
//         "./src/index",
//     ],
//     output: {
//         filename: "index.js",
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js", ".jpg", ".png"],
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: [
//                     { loader: "react-hot-loader/webpack" },
//                     { loader: "awesome-typescript-loader" },
//                 ],
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     { loader: "style-loader" },
//                     { loader: "raw-loader" }
//                 ],
//             },
//             {
//                 test: /\.(jpg|png|svg)$/,
//                 loader: "url-loader",
//             },
//         ],
//     },
//     devServer: {
//         hot: true,
//         inline: true,
//     },
//     devtool: "eval",
// };