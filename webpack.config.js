module.exports = {
    mode: process.env.NODE_ENV,
    entry: ['./src/index.js'],
    output: {
        path: `${__dirname}/examples`,
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    devServer: {
        open: true,
        contentBase: `${__dirname}/examples`,
        port: 8080,
        historyApiFallback: true,
    },
}
