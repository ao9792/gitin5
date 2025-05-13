const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    resolve: {
        fallback: {
            path: require.resolve("path-browserify")
        }
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: __dirname + "/src/",
                    from: "*.html",
                },
            ],
        }),
    ],
};
