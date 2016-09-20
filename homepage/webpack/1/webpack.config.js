module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: "url?limit=40000" }   // 添加到这
        ]
    }
};