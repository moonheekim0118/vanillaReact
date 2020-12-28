const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    watch: true,
    devServer: {
        contentBase: "./public",
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".scss"]
    },
    output: {
        path: path.join(__dirname, "public/"),
        publicPath: "/public",
        filename: "bundle.js"
    }
};
