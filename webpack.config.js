var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    }
}